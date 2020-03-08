import React from "react"
import { View, Text } from "react-native"

const Home = () => {
  const styles = {
    home: {
      backgroundColor: "pink"
    }
  }
  return (
    <View style={styles.home}>
      <Text>mi casa es su casa</Text>
    </View>
  )
}

export default Home
