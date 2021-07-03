/* eslint-disable react-native/no-inline-styles */
import { QuestionType } from '@/types';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from 'react-native-elements';

type Props = { item: QuestionType } & TouchableOpacityProps;

export default function QuestionItem({ item, ...rest }: Props) {
  return (
    <TouchableOpacity style={{ padding: 10 }} {...rest}>
      <Text style={{ fontWeight: 'bold' }}>{item.questionText}</Text>
    </TouchableOpacity>
  );
}
