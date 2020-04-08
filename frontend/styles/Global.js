import { StyleSheet } from "react-native";

export const Global = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
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
    buttonText: {
        color: "white",
        fontSize: 24,
        fontWeight: "500"
    },
    bottom: {
        flex: 1,
        width: "100%",
        paddingLeft: '14%',
        justifyContent: "flex-end",
        marginBottom: 36
    },
    header: {
        fontSize: 40,
        color: '#143e60',
        fontWeight: '600'
    },
    subHeader: {
        fontSize: 20,
        color: '#143e60',
        padding: '5%',
        fontWeight: '400',
        textAlign: 'center'
    },
    textContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    doneButton: {
        backgroundColor: '#20639B',
        width: '85%',
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    input: {
        width: '60%',
        borderWidth: 2,
        borderColor: '#143e60',
        margin: 8,
        padding: 18,
        borderRadius: 8,
        fontSize: 24
    },
    headerStyle: { 
        backgroundColor: '#2d95d1',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    headerTitleStyle: { 
        color: '#FFF', 
        fontSize: 24, 
        fontWeight: '500'
    },
    clubText: {
        marginTop: "4%",
        fontSize: 24,
        paddingLeft: "4%",
        color: "#143e60",
        fontWeight: "500",
        marginBottom: "1%"
    },
    bookText: {
        fontSize: 24,
        paddingLeft: "4%",
        color: "#143e60",
        fontWeight: "500",
        marginTop: "4%",
        marginBottom: "1%"
    },
    clubHolder: {
        height: 185,
        backgroundColor: "#155149",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    clubImage: {
        width: 113.33,
        height: 165,
        borderRadius: 2,
        paddingLeft: 10,
        marginTop: 10
    },
    book: {
        width: 100,
        height: 150,
        borderRadius: 7,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    clubTitle: {
        fontSize: 24,
        color: "#fff",
        marginTop: 10
    },
    clubAuthor: {
        justifyContent: "space-between",
        marginTop: 5,
        color: "#bbb"
    }
});
