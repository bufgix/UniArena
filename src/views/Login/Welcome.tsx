import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {observer} from 'mobx-react-lite';
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {LoginStackProps, RootStackProps} from '@/navigation';

import {useStore} from '@/models';

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
    <SafeAreaView>
      <Input
        placeholder="Pick a cool username"
        value={nickname}
        onChangeText={setNickname}
      />
      <Button title="Lets Go!" onPress={doSave} />
    </SafeAreaView>
  );
}

export default observer(WelcomeScreen);
