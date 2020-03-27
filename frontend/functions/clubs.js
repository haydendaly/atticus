/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

module.exports = {
    create: function(bookID, userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/create';
        fetch(url, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                bookID: bookID,
                users: [{
                    userID: userID,
                    progress: 0
                }]
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback(null);
        })
    },
    get: function(clubID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/get/' + clubID;
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
    delete: function(clubID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/delete/' + clubID;
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
    update: function(clubID, body, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/update/' + clubID;
        fetch(url, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: body
        })
        .then((response) => response.json())
        .then((responseJson) => {
            callback(responseJson);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            callback(null);
        })
    },
    join: function(clubID, userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/join/' + clubID + "/" + userID;
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
    leave: function(clubID, userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/leave/' + clubID + "/" + userID;
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
    updateProgress: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/clubs/updateProgress/' + clubID + "/" + userID;
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
}
