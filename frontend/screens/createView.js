/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,
    TextInput, Button } from "react-native";

export default function ClubView({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Club</Text>
      <Text>This is createview</Text>
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
