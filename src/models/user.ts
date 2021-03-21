import {types, Instance, flow, toGenerator} from 'mobx-state-tree';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import type {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const User = types
  .model({
    nickname: types.optional(types.string, ''),
    level: types.optional(types.number, 0),
    isLogin: types.optional(types.boolean, false),
    googleData: types.maybeNull(types.frozen<FirebaseAuthTypes.User>()),
  })
  .actions(self => ({
    googleLogin: flow(function* () {
      try {
        yield GoogleSignin.hasPlayServices();
        const {idToken} = yield* toGenerator(GoogleSignin.signIn());
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
      }
    }),
    saveAdditionalData: flow(function* (nickname: string) {
      /*
        ilk kullanıcı login olduktan sonra ekstra verileri
        firestore kaydetmek için bu methodu kullan
      */
      yield firestore().collection('users').doc(self.googleData?.uid).set({
        nickname,
      });
    }),
  }));

export type UserType = Instance<typeof User>;
