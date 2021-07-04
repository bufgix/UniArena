import { types, Instance, flow, toGenerator } from 'mobx-state-tree';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export type UserDocType = {
  nickname: string;
  point: number;
  solved: number;
  solvedSucess: number;
};

export const User = types
  .model({
    nickname: types.optional(types.string, ''),
    point: types.optional(types.number, 0),
    solved: types.optional(types.number, 0),
    solvedSucess: types.optional(types.number, 0),
    level: types.optional(types.number, 0),
    googleData: types.maybeNull(types.frozen<FirebaseAuthTypes.User>()),
  })
  .actions(self => {
    return {
      googleLogin: flow(function* () {
        try {
          yield GoogleSignin.hasPlayServices();
          const { idToken } = yield* toGenerator(GoogleSignin.signIn());
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          const signData = yield* toGenerator(
            auth().signInWithCredential(googleCredential),
          );
          self.googleData = signData.user;
          return signData;
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('user cancelled the login flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('sign in is in progress already');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('play services not available or outdated');
          } else {
            console.log('error when log in: ', error);
          }
          return Promise.reject(error);
        }
      }),
      saveAdditionalData: flow(function* (nickname: string) {
        /*
          ilk kullanıcı login olduktan sonra ekstra verileri
          firestore kaydetmek için bu methodu kullan
        */
        yield firestore().collection('users').doc(self.googleData?.uid).set({
          nickname,
          point: 0,
          solved: 0,
          solvedSucess: 0,
        });
      }),
      updateUser: ({ nickname, point, solved, solvedSucess }: UserDocType) => {
        self.nickname = nickname;
        self.point = point;
        self.solved = solved;
        self.solvedSucess = solvedSucess;
      },
      loginCheck: flow(function* () {
        const isLogged = yield* toGenerator(GoogleSignin.isSignedIn());
        if (isLogged) {
          self.googleData = auth().currentUser;
          return true;
        }
        return false;
      }),
    };
  })
  .actions(self => {
    let subscriber: Function | null = null;
    return {
      loadAdditionalData: flow(function* () {
        const response = yield* toGenerator(
          firestore().collection('users').doc(self.googleData?.uid).get(),
        );
        const {
          nickname,
          solved,
          point,
          solvedSucess,
        } = response.data() as UserDocType;
        self.updateUser({ nickname, solved, point, solvedSucess });
      }),
      subscribe: () => {
        if (!subscriber) {
          subscriber = firestore()
            .collection('users')
            .doc(self.googleData?.uid)
            .onSnapshot(snap => {
              const {
                nickname,
                point,
                solved,
                solvedSucess,
              } = snap.data() as UserDocType;
              self.updateUser({ nickname, point, solvedSucess, solved });
            });
        }

        return subscriber;
      },

      unsubscribe: () => {
        if (subscriber) subscriber();
        else subscriber = null;
      },
      logout: flow(function* () {
        yield GoogleSignin.signOut();
        self.googleData = null;
        self.nickname = '';
        self.level = 0;
        self.solved = 0;
        self.solvedSucess = 0;
        self.point = 0;
        if (subscriber) subscriber();
        else subscriber = null;
      }),
    };
  });

export type UserType = Instance<typeof User>;
