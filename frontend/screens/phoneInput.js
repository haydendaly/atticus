/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
// import TextVerification from "./textVerification";

export default function PhoneInput({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Enter your number</Text>
      <TextInput style={styles.input} keyboardType={"phone-pad"} />
      <TouchableOpacity
        style={styles.getStartedButton}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("TextVerification")}
      >
        <View>
          <Text style={styles.buttonText}>Done</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  getStartedButton: {
    backgroundColor: "#007aff",
    height: 50,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500"
  },
  input: {
    width: "60%",
    height: 60,
    borderWidth: 1,
    borderColor: "#444",
    margin: 8,
    paddingLeft: 10,
    paddingRight: 10
  }
});
