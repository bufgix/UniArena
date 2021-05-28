import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackProps } from '@/navigation';
import { observer } from 'mobx-react-lite';
import { RadioGroup } from '@/components';
import { useStore } from '@/models';
import { useStatusBar } from '@/utils/hooks';
import { Fonts, Helpers, Colors, Spacing } from '@/styles';
import { StyleSheet } from 'react-native';

type NavigaitonProps = StackNavigationProp<RootStackProps, 'MainStack'>;

export type Item = {
  id: number;
  name: string;
};
export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};
export type RadioButtonProps = {
  item: Item;
  selected?: Item;
  onSelected(item: Item): void;
};

function Arena() {
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();
  useStatusBar('dark-content', true);

  const doLogout = () => {
    store.user.logout().then(() => {
      navigation.navigate('LoginStack', { screen: 'LoginScreen' });
    });
  };

  const [selected, setSelected] = useState<Item>();

  const items: Item[] = [
    { id: 1, name: 'int' },
    { id: 2, name: 'var' },
    { id: 3, name: 'float' },
    { id: 4, name: 'let' },
  ];

  const onSelected = (item: Item) => {
    setSelected(item);
  };

  return (
    <SafeAreaView style={styles.arena}>
      <Text style={styles.question}>C dilinde tam sayı nasıl tanımlanır ?</Text>

      <RadioGroup selected={selected} onSelected={onSelected} items={items} />

      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Sonraki Soru"
      />

      <Button title="Log out" onPress={doLogout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: Fonts.size.h5,
    ...Helpers.textCenter,
    backgroundColor: Colors.Primary,
    color: Colors.White,
    borderRadius: 20,
    paddingVertical: Spacing.normal,
    marginHorizontal: Spacing.medium,
  },
  arena: {
    ...Helpers.fill,
    ...Helpers.mainSpaceAround,
    marginVertical: Spacing.medium,
  },
  button: {
    ...Helpers.selfCenter,
    marginTop: Spacing.large,
    width: 200,
    height: 65,
    paddingVertical: Spacing.normal,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    ...Fonts.style.normal,
  },
});

export default observer(Arena);
