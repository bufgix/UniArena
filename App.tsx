/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from '@/navigation';
import {ThemeProvider} from 'react-native-elements';

import {StoreProvider, initStore} from '@/models';

const store = initStore();

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider value={store}>
        <ThemeProvider>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </ThemeProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
