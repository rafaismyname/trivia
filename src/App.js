import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import * as RNLocalize from 'react-native-localize';
import i18n from './Locales/i18n';
import initStore from './Stores';
import SplashScreen from './Containers/Splash/SplashScreen';
import RootScreen from './Containers/Root/RootScreen';

const { store, persistor } = initStore();

export default function App() {
  // This is the same as componentDidMount
  useEffect(() => {
    RNLocalize.addEventListener('change', i18n.onLocaleUpdate);

    // This is the same as componentWillUnmount
    return () => {
      RNLocalize.removeEventListener('change', i18n.onLocaleUpdate);
    };
  }, []);

  // Initialization tree: UI Theme Provider > Redux Provider > Redux Persist Provider > Root Container
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <IconRegistry icons={EvaIconsPack}/>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    </ApplicationProvider>
  );
}
