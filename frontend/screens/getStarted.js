/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Global } from '../styles/Global'

export default function GetStarted({ navigation }) {
  const pressHandler = () => {
    navigation.push("PhoneInput");
  };
  const imageHolder = [require('../assets/GetStarted/1.jpg'), require('../assets/GetStarted/2.jpg'), require('../assets/GetStarted/3.jpg')]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  setTimeout(() => {
    setCurrentImageIndex(currentImageIndex == imageHolder.length - 1 ?
          0:
          currentImageIndex + 1
        )
  }, 5000)

  return (
    <ImageBackground source={imageHolder[currentImageIndex]} style={{width: '100%', height: '100%'}}>
      <View style={Global.container}>
        <Text style={Global.text}>Atticus</Text>
        <Text style={Global.subText}>Group reading made easy</Text>
        <View style={Global.bottom}>
          <TouchableOpacity
            style={Global.doneButton}
            activeOpacity={0.75}
            onPress={pressHandler}
          >
            <Text style={Global.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
