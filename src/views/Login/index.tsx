import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import {
  useNavigation,
  CompositeNavigationProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { LoginStackProps, RootStackProps } from '@/navigation';
import { observer } from 'mobx-react-lite';

import * as Icons from '@/components/icons';

import { useStore } from '@/models';
import { useStatusBar } from '@/utils/hooks';
import { Shield, Swords } from '@/components/icons';
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
    store.user.loginCheck().then(res => {
      if (res) {
        store.user
          .loadAdditionalData()
          .then(() => navigation.navigate('MainStack', { screen: 'Timeline' }));
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
          // yeni üye değilse direkt olarak maine gidilecek
          navigation.navigate('MainStack');
        }
      })
      .catch(_err => {
        // Giriş yaparken hata olursa
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <View style={styles.logo}>
        <Shield />
      </View>
      <View style={styles.swords}>
        <Swords />
      </View>
      <Button
        title="Giriş Yap"
        icon={
          <Icons.Google height={30} width={30} style={{ marginRight: 10 }} />
        }
        loading={loading}
        loadingProps={{ color: Colors.Primary }}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={doLogin}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.Primary,
  },
  logo: {
    marginTop: Spacing.medium,
    height: 350,
  },

  swords: {
    marginTop: Spacing.normal,
    height: 210,
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
});

export default observer(Login);
