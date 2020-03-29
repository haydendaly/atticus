import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import HomeScreen from '../screens/homeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, TouchableOpacity } from 'react-native';
import ClubView from '../screens/clubView';
import BookView from'../screens/bookView';

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => {
      return {
        headerShown: true
      };
    }
  },
  ClubView: {
    screen: ClubView,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        title: 'Club View',
        headerStyle: { backgroundColor: '#20639B' },
        headerTitleStyle: { color: '#FFF', fontSize: 24, fontWeight: '500'},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{paddingLeft: 8}}>
            <Icon
              name='chevron-left'
              color='#FFF'
              size={32}
            />
          </TouchableOpacity>
          ),
      }
    }
  },
  BookView: {
    screen: BookView,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        title: 'Book View',
        headerStyle: { backgroundColor: '#20639B' },
        headerTitleStyle: { color: '#FFF', fontSize: 24, fontWeight: '500'},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{paddingLeft: 8}}>
            <Icon
              name='chevron-left'
              color='#FFF'
              size={32}
            />
          </TouchableOpacity>
          ),
      }
    }
  }  
};

const HomeStack = createStackNavigator(screens);
// export default HomeStack;
export default createAppContainer(HomeStack);
