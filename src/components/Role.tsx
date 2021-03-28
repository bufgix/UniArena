import { Colors, Fonts, Helpers } from '@/styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import * as Icons from '@/components/icons';

type Props = {
  text: string;
  level: keyof typeof RoleLevels;
};

const RoleLevels = {
  SILVER: {
    bgColor: Colors.Silver,
    color: Colors.White,
  },
  GOLD: {
    bgColor: Colors.Gold,
    color: Colors.Dark,
  },
  MASTER: {
    bgColor: Colors.Master,
    color: Colors.White,
  },
};

export function RoleArea({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{children}</View>
  );
}

export default function Role({ text, level }: Props) {
  const styles = StyleSheet.create({
    container: {
      ...Helpers.row,
      ...Helpers.crossCenter,
      backgroundColor: RoleLevels[level].bgColor,
      alignSelf: 'flex-start',
      padding: 3,
      margin: 3,
      borderRadius: 3,
    },
    text: {
      ...Fonts.style.bold,
      fontSize: Fonts.size.small,
      color: RoleLevels[level].color,
    },
  });

  return (
    <View style={styles.container}>
      <Icons.Events height={15} width={15} color={RoleLevels[level].color} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
