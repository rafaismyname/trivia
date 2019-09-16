import React from 'react';
import { Layout, Text } from 'react-native-ui-kitten';
import Style from './SplashScreenStyle';

export default function SplashScreen() {
  return (
    <Layout style={Style.container}>
      <Text category="h1">trivia</Text>
    </Layout>
  );
}
