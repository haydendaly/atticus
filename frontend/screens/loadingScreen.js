/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    setTimeout( () => {
      AsyncStorage.getItem('userID').then((value) => {
        if (value != null && value != '') {
          this.props.navigation.navigate('HomeStack');
        } else {
          this.props.navigation.navigate('SignInStack');
        }
      })
    }, 300)
  };

  render() {
    return <View style={styles.container}>
      <Text style={{fontSize: 64, color: '#fff'}}>Atticus</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20639B'
  }
});