import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import Login from "./Views/Login"
import Home from "./Views/Home"

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>hi</Text>
        <Login />
        <Home />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
