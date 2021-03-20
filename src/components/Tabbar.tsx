import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '@/styles';
import {Account, Timeline, Home} from '@/components/icons';

export const TABBAR_HEIGHT = Platform.OS === 'ios' ? 90 : 60;

function TabBar({state, descriptors, navigation}: MaterialTopTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: insets.bottom,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        borderTopWidth: 1,
        borderTopColor: Colors.Dark20,
        height: TABBAR_HEIGHT,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        let Icon: React.ElementType = Account;
        switch (route.name) {
          case 'Feed':
            Icon = Home;
            break;
          case 'Ranks':
            Icon = Timeline;
            break;
          case 'Profile':
            Icon = Icon;
            break;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              height={30}
              width={30}
              color={isFocused ? Colors.Primary : Colors.PrimaryDisable}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
