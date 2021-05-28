import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackProps } from '@/navigation';
import { Fonts, Helpers, Spacing } from '@/styles';

import { useStore } from '@/models';

type NavigaitonProps = StackNavigationProp<RootStackProps>;

// Bu ekran kullanıcını nick ve avatar seçtiği ekran olacak
function WelcomeScreen() {
  const store = useStore();
  const navigaiton = useNavigation<NavigaitonProps>();

  const [nickname, setNickname] = useState<string>('');

  const doSave = () => {
    store.user.saveAdditionalData(nickname).then(() => {
      navigaiton.navigate('MainStack');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="Kendine Bir İsim Seç"
        value={nickname}
        onChangeText={setNickname}
        style={styles.inputStyle}
        inputContainerStyle={styles.inputContainer}
      />

      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Arenaya Çık !"
        onPress={doSave}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    ...Helpers.fillCenter,
  },

  button: {
    ...Helpers.selfCenter,
    marginTop: Spacing.large,
    width: 225,
    height: 60,
    paddingVertical: Spacing.normal,
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: 'bold',
    ...Fonts.style.normal,
  },
  inputStyle: {
    ...Helpers.textCenter,
    ...Fonts.style.h5,
  },
  inputContainer: {
    width: 350,
    ...Helpers.selfCenter,
  },
});

export default observer(WelcomeScreen);
