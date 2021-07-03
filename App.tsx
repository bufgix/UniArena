import React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from '@/navigation';
import { ThemeProvider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'mst-persist';
import { QueryClient, QueryClientProvider } from 'react-query';

import { StoreProvider, initStore } from '@/models';
import Theme from '@/styles/theme';

LogBox.ignoreLogs([
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
]);

const store = initStore();
const queryClient = new QueryClient();

persist('@State_user', store, {
  storage: AsyncStorage,
  jsonify: true,
  whitelist: ['user'],
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={store}>
        <ThemeProvider theme={Theme}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <RootStackScreen />
            </NavigationContainer>
          </QueryClientProvider>
        </ThemeProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
