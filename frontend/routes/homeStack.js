import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/homeScreen';

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => {
      return {
        headerShown: true,
        title: 'Atticus',
        headerStyle: { backgroundColor: '#2d95d1' },
        headerTitleStyle: { color: '#FFF', fontSize: 28, fontWeight: '500'},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('GetStarted')} style={{paddingLeft: 16, paddingBottom: 4}}>
            <Icon
              name='search'
              color='#FFF'
              size={28}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('GetStarted')} style={{paddingRight: 16, paddingBottom: 4}}>
            <Icon
              name='plus'
              color='#FFF'
              size={28}
            />
          </TouchableOpacity>
        ),
      };
    }
  }
};

const HomeStack = createStackNavigator(screens);
export default HomeStack;
