/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image
} from "react-native"

export default function ClubView({ navigation }) {
  const placeholderPageCountProgress = 462
  const placeholderPageCountTotal = 782
  const friends = [
    {
      name: "Scott",
      progress: 309
    },
    {
      name: "Madeleine",
      progress: 111
    },
    {
      name: "Miriam",
      progress: 634
    }
  ]
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg"
        }}
        style={styles.bookCover}
      ></Image>
      <Text style={styles.bookTitle}>Book Title Placeholder</Text>
      <Text style={styles.bookAuthor}>Book Author Placeholder</Text>
      <View style={styles.progressBarContainer}>
        <View style={{ ...styles.progressBarOutline, height: 30 }}></View>
        <View
          style={{
            ...styles.progressBarProgress,
            width: `${(placeholderPageCountProgress /
              placeholderPageCountTotal) *
              100}%`,
            height: 30
          }}
        ></View>
      </View>
      <View style={styles.pageCountContainer}>
        <TextInput
          style={styles.pageCountInput}
          value={placeholderPageCountProgress.toString()}
        ></TextInput>
        <Text style={styles.pageCountTotal}>
          {" "}
          / {placeholderPageCountTotal}
        </Text>
      </View>
      <Text style={styles.text}>
        {encouragements[Math.floor(Math.random() * encouragements.length)]}
      </Text>
      <View style={styles.connectorBall}></View>
      <View style={styles.connectorBar}></View>
      <View style={styles.connectorBall}></View>
      <Text style={styles.text}>Here's how your friends are doing!</Text>
      <View style={styles.friendContainer}>
        {friends.map(friend => {
          return (
            <View style={styles.friend}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <View style={styles.progressBarContainer}>
                <View
                  style={{ ...styles.progressBarOutline, height: 10 }}
                ></View>
                <View
                  style={{
                    ...styles.progressBarProgress,
                    width: `${(friend.progress / placeholderPageCountTotal) *
                      100}%`,
                    height: 10
                  }}
                ></View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const themeColor = "indigo"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  bookTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold"
  },
  bookAuthor: {
    fontSize: 16
  },
  text: {
    fontSize: 14,
    margin: 10,
    color: themeColor
  },
  bookCover: {
    width: "40%",
    height: "40%",
    borderRadius: 8,
    marginTop: 20
  },
  progressBarContainer: {
    width: "80%",
    marginTop: 10,
    marginBottom: 10
  },
  progressBarOutline: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: themeColor,
    borderRadius: 50,
    width: "100%"
  },
  progressBarProgress: {
    backgroundColor: themeColor,
    borderRadius: 50,
    position: "absolute"
  },
  pageCountContainer: {
    flexDirection: "row"
  },
  pageCountInput: {
    backgroundColor: "white",
    fontSize: 32,
    textDecorationLine: "underline",
    borderColor: themeColor,
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    color: themeColor
  },
  pageCountTotal: {
    fontSize: 32,
    margin: 5,
    color: themeColor
  },
  connectorBall: {
    width: 10,
    height: 10,
    borderColor: themeColor,
    borderWidth: 2,
    borderRadius: 50
  },
  connectorBar: {
    width: 2,
    height: 50,
    backgroundColor: themeColor
  },
  friendContainer: {
    flexDirection: "row",
    width: "100%"
  },
  friend: {
    width: "33%",
    alignItems: "center"
  },
  friendName: {
    color: themeColor,
    fontWeight: "bold"
  }
})

const encouragements = [
  "Good work!",
  "Keep going!",
  "Nice work!",
  "Nice job!",
  "Hang in there buddy its almost over I promise"
]
