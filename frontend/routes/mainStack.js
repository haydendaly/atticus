import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Platform } from 'react-native';
import { setCustomText } from 'react-native-global-props'
import SignInStack from './signInStack';
import HomeStack from './homeStack';

setCustomText({
  style: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    fontSize: 14
  }
}) 


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
