import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  useNavigation,
  CompositeNavigationProp,
  DrawerActions,
} from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SvgProps } from 'react-native-svg';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/models';
import { Colors, Helpers } from '@/styles';
import * as Icons from '@/components/icons';
import { DrawerStackProp, RootStackProps } from '@/navigation';
import helpers from '@/styles/helpers';
import spacing from '@/styles/spacing';

type NavigaitonProps = CompositeNavigationProp<
  StackNavigationProp<DrawerStackProp>,
  StackNavigationProp<RootStackProps>
>;

type TabUnion = keyof DrawerStackProp;

const DRAWER_ICONS: Record<TabUnion, React.ElementType<SvgProps>> = {
  Settings: Icons.Settings,
  Ranks: Icons.Crown,
};

function DrawerContent({ state, descriptors }: DrawerContentComponentProps) {
  const navigation = useNavigation<NavigaitonProps>();
  const store = useStore();

  const doLogout = () => {
    store.user.logout().then(() => {
      navigation.dispatch(DrawerActions.closeDrawer());
      navigation.navigate('LoginStack', { screen: 'LoginScreen' });
    });
  };

  return (
    <DrawerContentScrollView>
      <View>
        <View style={styles.routes}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const onPress = () => {
              navigation.navigate(route.name as TabUnion);
            };
            const Icon = DRAWER_ICONS[route.name as TabUnion];
            const isFocus = state.index === index;
            return (
              <TouchableOpacity
                style={styles.item}
                key={route.key}
                onPress={onPress}>
                <Icon
                  height={30}
                  width={30}
                  color={isFocus ? Colors.Primary : Colors.PrimaryDisable}
                />
                <Text style={styles.itemText}>{options.title}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={styles.item} onPress={doLogout}>
            <Icons.Logout
              height={30}
              width={30}
              color={Colors.PrimaryDisable}
            />
            <Text style={styles.itemText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.version}>v1.0.0</Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Helpers.selfCenter,
  },
  item: {
    ...helpers.row,
    ...helpers.crossCenter,
    paddingVertical: spacing.tiny,
  },
  itemText: {
    marginLeft: spacing.tiny,
  },
  routes: {
    marginTop: spacing.medium,
    paddingHorizontal: spacing.small,
  },
  version: {
    marginTop: spacing.large,
    ...helpers.selfCenter,
  },
});

export default observer(DrawerContent);
