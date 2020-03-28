import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import HomeScreen from '../screens/homeScreen';

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => {
      return {
        headerShown: true
      };
    }
  }
};

const HomeStack = createStackNavigator(screens);
export default HomeStack;
// export default createAppContainer(HomeStack);
