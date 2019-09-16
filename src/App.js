import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import RootScreen from './Containers/Root/RootScreen';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <RootScreen />
    </ApplicationProvider>
  );
}
