import colors from '@/styles/colors';
import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  Text,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

import * as Icons from '@/components/icons';
import { Spacing } from '@/styles';

type Props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  textStyle?: TextStyle;
  style?: ViewStyle | ViewStyle[];
};

const Button = ({ text, textStyle, style, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      <Icons.ArrowRight color={colors.Primary} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    paddingVertical: Spacing.normal,
    paddingHorizontal: Spacing.medium,
  },
  textStyle: {
    color: colors.Primary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  iconStyle: {
    marginTop: 3,
    width: 24,
    height: 24,
  },
});

export default Button;
