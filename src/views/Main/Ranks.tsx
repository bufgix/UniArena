/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import changeNavBarColor from 'react-native-navigation-bar-color';
import { observer } from 'mobx-react-lite';

import { Colors } from '@/styles';
import { ActivityIndicator, StyleSheet, FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import firestore from '@react-native-firebase/firestore';
import { UserDocType } from '@/models/user';
import * as Icons from '@/components/icons';

function Ranks() {
  useEffect(() => {
    changeNavBarColor(Colors.White, true, true);
  }, []);

  const { isLoading, data } = useQuery('ordered.users', async () => {
    const users: UserDocType[] = [];
    const snapShot = await firestore()
      .collection('users')
      .orderBy('point', 'desc')
      .get();
    snapShot.forEach(d => users.push(d.data() as UserDocType));
    return users;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text h1 style={{ alignSelf: 'center' }}>
        Ranking
      </Text>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.Primary} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 10,
              }}>
              <Text>{item.nickname}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{item.point}</Text>
                <Icons.Crown
                  height={30}
                  width={30}
                  color={index === 0 ? Colors.Primary : Colors.Gray}
                />
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
});
export default observer(Ranks);
