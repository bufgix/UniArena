import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from '@/navigation';
import { ThemeProvider } from 'react-native-elements';

import { StoreProvider, initStore } from '@/models';
import Theme from '@/styles/theme';

const store = initStore();

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={store}>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </ThemeProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
