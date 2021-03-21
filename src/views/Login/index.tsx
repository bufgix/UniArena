import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {LoginStackProps, RootStackProps} from '@/navigation';
import {observer} from 'mobx-react-lite';

import {useStore} from '@/models';

type NavigaitonProps = CompositeNavigationProp<
  StackNavigationProp<RootStackProps>,
  StackNavigationProp<LoginStackProps>
>;

function Login() {
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();

  useEffect(() => {
    // Eğer halihazırda giriş yapılmış ise
    // ana sayfaya yönlendir
    store.user.loginCheck().then(res => {
      if (res) {
        store.user
          .loadAdditionalData()
          .then(() => navigation.navigate('MainStack'));
      }
    });
  }, []);

  const doLogin = () => {
    store.user
      .googleLogin()
      .then(googleData => {
        if (googleData?.additionalUserInfo?.isNewUser) {
          // eger yeni üyse, nick ve avatar seçme ekranına gidilecek
          navigation.navigate('Welcome');
        } else {
          // yeni üye değilse direkt olarak maine gidilecek
          navigation.navigate('MainStack');
        }
      })
      .catch(err => {
        // Giriş sırasında hata oluşursa
      });
  };

  return (
    <SafeAreaView>
      <Text h1>Login</Text>
      <Button title="Press Me" onPress={doLogin} />
    </SafeAreaView>
  );
}

export default observer(Login);
