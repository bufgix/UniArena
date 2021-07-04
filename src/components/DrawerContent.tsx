import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  useNavigation,
  CompositeNavigationProp,
  DrawerActions,
} from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SvgProps } from 'react-native-svg';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/models';
import { Colors, Fonts, Helpers } from '@/styles';
import { Role, RoleArea } from '@/components';
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

  const profilePicture = store.user.googleData?.photoURL;
  const nickname = store.user.nickname;

  const doLogout = () => {
    store.user.logout().then(() => {
      navigation.dispatch(DrawerActions.closeDrawer());
      navigation.navigate('LoginStack', { screen: 'LoginScreen' });
    });
  };

  return (
    <>
      <View style={styles.profileBanner}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MainStack', { screen: 'Profile' })
          }>
          <Avatar
            rounded
            size="large"
            source={{ uri: profilePicture ? profilePicture : undefined }}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{nickname}</Text>
        <RoleArea>
          <Role text={store.user.point.toString()} level="MASTER" />
        </RoleArea>
      </View>
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

        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Helpers.selfCenter,
  },
  profileBanner: {
    minHeight: 180,
    backgroundColor: Colors.OverlayColor,
    justifyContent: 'flex-end',
    paddingTop: 50,
    paddingBottom: spacing.tiny,
    paddingHorizontal: spacing.small,
  },
  name: {
    ...Fonts.style.bold,
    marginVertical: spacing.tiny,
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
    paddingHorizontal: spacing.small,
  },
  version: {
    marginTop: spacing.large,
    ...helpers.selfCenter,
  },
});

export default observer(DrawerContent);
