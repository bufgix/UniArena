import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import {
  useNavigation,
  CompositeNavigationProp,
  CommonActions,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { LoginStackProps, RootStackProps } from '@/navigation';
import { observer } from 'mobx-react-lite';
import changeNavBarColor from 'react-native-navigation-bar-color';
import * as Icons from '@/components/icons';

import { useStore } from '@/models';
import { useStatusBar } from '@/utils/hooks';
import { Colors, Helpers, Spacing } from '@/styles';

type NavigaitonProps = CompositeNavigationProp<
  StackNavigationProp<RootStackProps>,
  StackNavigationProp<LoginStackProps>
>;

function Login() {
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();
  useStatusBar('light-content', true);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Eğer halihazırda giriş yapılmış ise
    // ana sayfaya yönlendir
    changeNavBarColor(Colors.Primary, false, true);
    store.user.loginCheck().then(res => {
      if (res) {
        setLoading(true);
        store.user
          .loadAdditionalData()
          .then(() => goMain())
          .finally(() => setLoading(false));
      }
    });
  }, []);

  const doLogin = () => {
    setLoading(true);
    store.user
      .googleLogin()
      .then(googleData => {
        if (googleData?.additionalUserInfo?.isNewUser) {
          // eger yeni üyse, nick ve avatar seçme ekranına gidilecek
          navigation.navigate('Welcome');
        } else {
          store.user.loadAdditionalData().then(() => {
            // yeni üye değilse direkt olarak maine gidilecek
            goMain();
          });
        }
      })
      .catch(_err => {
        // Giriş yaparken hata olursa
      })
      .finally(() => setLoading(false));
  };

  const goMain = () => {
    store.user.subscribe();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require('@/assets/images/login_bg.png')}>
        <Icons.Logo height={305} width={305} />

        <Button
          disabled={loading}
          title="Giriş Yap"
          icon={<Icons.Google height={30} width={30} style={styles.icon} />}
          loading={loading}
          loadingProps={{ color: Colors.Primary }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={doLogin}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.Primary,
  },
  imageBg: {
    ...Helpers.fillCenter,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    ...Helpers.selfCenter,
    marginTop: Spacing.large,
    backgroundColor: Colors.White,
    width: 200,
    paddingVertical: Spacing.normal,
    borderRadius: 10,
  },

  buttonText: {
    color: Colors.Primary,
    fontWeight: 'bold',
  },
  icon: { marginRight: 10 },
});

export default observer(Login);
