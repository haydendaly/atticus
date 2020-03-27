/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

module.exports = {
    get: function(bookID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/books/get/' + bookID;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback([]);
        })
    },
    doesExist: function(bookID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/books/doesExist' + bookID;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback([]);
        })
    },
    create: function(bookID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/books/create/' + bookID;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback([]);
        })
    },
    search: function(search, callback) {
        url = 'https://bookclub-hd.herokuapp.com/books/search/' + search;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback([]);
        })
    },
    getHomescreen: function(callback) {
        url = 'https://bookclub-hd.herokuapp.com/books/getHomescreen';
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback([]);
        })
    }
}
