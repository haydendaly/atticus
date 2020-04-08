/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeleine, Miriam, and Scott
#################################################*/

import React, { useState, useEffect } from "react"
import books from "../functions/books";
import users from '../functions/users';
import clubs from "../functions/clubs";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native"
import { Global } from '../styles/Global';

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params
    // users.getClubs('temp', true, clubs => {
    //   this.setState({
    //     clubs: clubs
    //   })
    // })
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={Global.clubText}>Your Clubs</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.clubs}
            renderItem={({ item }) => (
              <View style={{paddingLeft: Dimensions.get("screen").width * 0.025 }}>
                <View style={[Global.clubHolder, {width: Dimensions.get("screen").width * 0.9 }]}>
                  <TouchableOpacity
                    style={Global.clubImage}
                    onPress={() => {
                      clubs.get(item.clubID, (club) => {
                        books.get(club.bookID, (book) => {
                          var friends = [];
                          var currentProgress = 0;
                          for (var i = 0; i < club.users.length; i++) {
                            if (club.users[i].userID != this.state.userID) {
                              friends.push(club.users[i])
                            } else {
                              currentProgress = club.users[i].progress
                            }
                          }
                          this.props.navigation.navigate("ClubView", [club, book, friends, this.state.userID, currentProgress])
                        })
                      })
                    }}
                  >
                    <Image
                      source={{ uri: item.imgURL }}
                      style={{ width: "100%", height: "100%", borderRadius: 8 }}
                    ></Image>
                  </TouchableOpacity>
                  <View style={{width: Dimensions.get("screen").width * 0.9 - 120}}>
                    <Text style={Global.clubTitle}>{item.title}</Text>
                    <Text style={Global.clubAuthor}>By {item.author}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.bookID}
          />
        </View>
        <FlatList
          data={this.state.books}
          renderItem={({ item }) => (
            <View>
              <Text style={Global.bookText}>{item.title}</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={item.data}
                renderItem={({ item }) => (
                  <View style={{ paddingLeft: 10 }}>
                    <TouchableOpacity
                      style={Global.book}
                      onPress={() => {
                        books.get(item.bookID, (data) => {
                          this.props.navigation.navigate("BookView", data)
                        })
                      }}
                    >
                      <Image
                        source={{ uri: item.imgURL }}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 8
                        }}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.bookID}
              />
            </View>
          )}
          keyExtractor={item => item.title}
        />
      </ScrollView>
    )
  }
}
