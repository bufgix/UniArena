/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  iosClientId:
    '535420584234-hma3f0pkth4m7cj5d5a9dg7cn1ud1c5a.apps.googleusercontent.com',
  webClientId:
    '535420584234-dpijdfi6ap7geq4kmsdc6daip7dboijh.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const App = () => {
  useEffect(() => {
    auth().onAuthStateChanged(async auth => {
      if (auth) {
        firestore().collection('users').doc(auth.uid).set({
          nickname: 'Bufgix',
        });
      }
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await onGoogleButtonPress();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hllo world</Text>
        <GoogleSigninButton onPress={signIn} />
      </View>
    </SafeAreaView>
  );
};

export default App;
