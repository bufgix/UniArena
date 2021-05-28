import React from 'react';
import { Colors, Fonts, Helpers } from '@/styles';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RadioButtonProps } from '@/views/Main/Arena/index';
import spacing from '@/styles/spacing';

const RadioButton = (props: RadioButtonProps) => {
  const { item, selected, onSelected } = props;
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelected(item)}>
      <Text style={styles.item}>{item.name}</Text>
      <View style={styles.button}>
        {selected?.id === item.id && <View style={styles.selectedButton} />}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  radioButton: {
    ...Helpers.mainSpaceBetween,
    ...Helpers.fillRowCross,
    backgroundColor: '#e5e5e5',
    padding: 25,
    marginHorizontal: spacing.medium,
  },
  button: {
    height: 28,
    width: 28,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#999',
    ...Helpers.center,
  },
  selectedButton: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: Colors.Primary,
  },
  item: {
    fontSize: Fonts.size.normal,
  },
});
export default RadioButton;
