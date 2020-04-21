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
    Image,
    FlatList,
} from "react-native"

export default class ClubView extends React.Component {
    constructor(props) {
        super(props)
        const club = this.props.navigation.state.params[0]
        this.state = {
            currentUserProgress: this.props.navigation.state.params[4],
            pageTotal: 69,
            friends: this.props.navigation.state.params[2],
            book: this.props.navigation.state.params[1],
            userID: this.props.navigation.state.params[3],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: this.state.book.imgURL,
                    }}
                    style={styles.bookCover}
                ></Image>
                <Text style={styles.bookTitle}>{this.state.book.title}</Text>
                <Text style={styles.bookAuthor}>{this.state.book.author}</Text>
                <View style={styles.progressBarContainer}>
                    <View
                        style={{ ...styles.progressBarOutline, height: 30 }}
                    ></View>
                    <View
                        style={{
                            ...styles.progressBarProgress,
                            width: `${
                                (this.state.currentUserProgress /
                                    this.state.pageTotal) *
                                100
                            }%`,
                            height: 30,
                        }}
                    ></View>
                </View>
                <View style={styles.pageCountContainer}>
                    <TextInput
                        style={styles.pageCountInput}
                        value={this.state.currentUserProgress.toString()}
                    ></TextInput>
                    <Text style={styles.pageCountTotal}>
                        {" "}
                        / {this.state.pageTotal}
                    </Text>
                </View>
                <Text style={styles.text}>
                    {
                        encouragements[
                            Math.floor(Math.random() * encouragements.length)
                        ]
                    }
                </Text>
                <View style={styles.connectorBall}></View>
                <View style={styles.connectorBar}></View>
                <View style={styles.connectorBall}></View>
                <Text style={styles.text}>
                    Here's how your friends are doing!
                </Text>
                <View style={styles.friendContainer}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flex: 1 / this.state.friends.length,
                        }}
                        data={this.state.friends}
                        renderItem={({ item }) => (
                            <View style={styles.friend}>
                                <Text style={styles.friendName}>
                                    {item.userID}
                                </Text>
                                <View style={styles.progressBarContainer}>
                                    <View
                                        style={{
                                            ...styles.progressBarOutline,
                                            height: 10,
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            ...styles.progressBarProgress,
                                            width: `${
                                                (item.progress /
                                                    this.state.pageCountTotal) *
                                                100
                                            }%`,
                                            height: 10,
                                        }}
                                    ></View>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => "key" + index}
                    />
                </View>
            </View>
        )
    }
}

const themeColor = "indigo"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
    },
    bookTitle: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: 16,
    },
    text: {
        fontSize: 14,
        margin: 10,
        color: themeColor,
    },
    bookCover: {
        width: "40%",
        height: "30%",
        borderRadius: 8,
        marginTop: 20,
    },
    progressBarContainer: {
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
    },
    progressBarOutline: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: themeColor,
        borderRadius: 50,
        width: "100%",
    },
    progressBarProgress: {
        backgroundColor: themeColor,
        borderRadius: 50,
        position: "absolute",
    },
    pageCountContainer: {
        flexDirection: "row",
    },
    pageCountInput: {
        backgroundColor: "white",
        fontSize: 32,
        textDecorationLine: "underline",
        borderColor: themeColor,
        borderWidth: 2,
        borderRadius: 8,
        padding: 5,
        color: themeColor,
    },
    pageCountTotal: {
        fontSize: 32,
        margin: 5,
        color: themeColor,
    },
    connectorBall: {
        width: 10,
        height: 10,
        borderColor: themeColor,
        borderWidth: 2,
        borderRadius: 50,
    },
    connectorBar: {
        width: 2,
        height: 50,
        backgroundColor: themeColor,
    },
    friendContainer: {
        width: "100%",
    },
    friend: {
        width: "100%",
        alignItems: "center",
    },
    friendName: {
        color: themeColor,
        fontWeight: "bold",
    },
})

const encouragements = [
    "Good work!",
    "Keep going!",
    "Nice work!",
    "Nice job!",
    "Hang in there buddy its almost over I promise",
]
