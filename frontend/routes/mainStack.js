import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import SignInStack from './signInStack';
import HomeStack from './homeStack';


const screens = {
  SignInStack: {
    screen: SignInStack,
    navigationOptions: () => {
      return {
        headerShown: false
      };
    }
  },
  HomeStack: {
    screen: HomeStack,
    navigationOptions: () => {
      return {
        headerShown: false
      };
    }
  }
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
