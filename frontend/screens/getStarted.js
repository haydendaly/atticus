/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

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
      <View style={styles.container}>
        <Text style={styles.text}>Atticus</Text>
        <Text style={styles.subText}>Group reading made easy</Text>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.getStartedButton}
            activeOpacity={0.75}
            onPress={pressHandler}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    marginTop: 50,
    fontSize: 56,
    color: "#20639B",
    fontWeight: "bold"
  },
  subText: {
    fontSize: 28,
    color: "#FFFFFF"
  },
  getStartedButton: {
    backgroundColor: "#20639B",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "500"
  },
  bottom: {
    flex: 1,
    width: "85%",
    justifyContent: "flex-end",
    marginBottom: 36
  }
});
