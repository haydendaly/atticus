/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function GetStarted({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Club</Text>
      <Text>Your Clubs</Text>
      <Text>Our Top Picks</Text>
      <Text>Community Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  text: {
    marginTop: 50,
    fontSize: 32
  }
});
