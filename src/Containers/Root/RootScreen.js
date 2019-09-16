import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Style from './RootScreenStyle';
import NavigationService from '../../Services/NavigationService';
import SplashScreen from '../Splash/SplashScreen';
import GameScreen from '../Game/GameScreen';

// Root is where our navigation lives
const AppStackNav = createStackNavigator(
  {
    SplashScreen,
    GameScreen,
  },
  {
    initialRouteName: 'GameScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const App = createAppContainer(AppStackNav);

function RootScreen() {
  return (
    <View style={Style.container}>
      <App ref={NavigationService.setTopLevelNavigator} />
    </View>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
