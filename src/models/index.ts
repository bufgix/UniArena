import { createContext, useContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { User } from './user';

const RootStore = types.model({
  user: types.optional(User, {}),
});

export const initStore = () => {
  GoogleSignin.configure({
    iosClientId:
      '535420584234-hma3f0pkth4m7cj5d5a9dg7cn1ud1c5a.apps.googleusercontent.com',
    webClientId:
      '535420584234-dpijdfi6ap7geq4kmsdc6daip7dboijh.apps.googleusercontent.com',
  });
  return RootStore.create({});
};

export type RootStoreType = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootStoreType>(null);
export const StoreProvider = RootStoreContext.Provider;
export default RootStore;

export function useStore(): RootStoreType {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('Store is not provided');
  }
  return store;
}
