import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/homeScreen';
import ClubView from '../screens/clubView';
import BookView from '../screens/bookView'
import SearchView from '../screens/searchView';
import CreateView from '../screens/createView';

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerShown: true,
        title: 'Atticus',
        headerStyle: { backgroundColor: '#2d95d1' },
        headerTitleStyle: { color: '#FFF', fontSize: 28, fontWeight: '500'},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SearchView')} style={{paddingLeft: 16, paddingBottom: 4}}>
            <Icon
              name='search'
              color='#FFF'
              size={28}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateView')} style={{paddingRight: 16, paddingBottom: 4}}>
            <Icon
              name='plus'
              color='#FFF'
              size={28}
            />
          </TouchableOpacity>
        ),
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
  },
  SearchView: {
    screen: SearchView,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        title: 'Search View',
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
  CreateView: {
    screen: CreateView,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        title: 'Join a Club',
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
export default HomeStack;
