import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';

export default function Profile() {
  return (
    <SafeAreaView>
      <Text h1>Porifle</Text>
      <Button title="Press Me" />
    </SafeAreaView>
  );
}
