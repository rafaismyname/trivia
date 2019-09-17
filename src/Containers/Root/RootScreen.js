import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import Style from './RootScreenStyle';
import NavigationService from '../../Services/NavigationService';
import SplashScreen from '../Splash/SplashScreen';
import MainScreen from '../Main/MainScreen';
import GameScreen from '../Game/GameScreen';

// Root is where our navigation lives
const AppStackNav = createStackNavigator(
  {
    SplashScreen,
    MainScreen,
    GameScreen,
  },
  {
    initialRouteName: 'MainScreen',
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
