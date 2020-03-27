/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

module.exports = {
    get: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/get/' + userID;
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
    create: function(name, number, deviceID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/create';
        fetch(url, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: name,
                number: number,
                deviceID: deviceID
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
    update: function(userID, body, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/update/' + userID;
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
    doesExist: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/doesExist' + userID;
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
    delete: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/delete' + userID;
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
    getClubs: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/getClubs' + userID;
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
    updateToken: function(userID, newToken, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/updateToken' + userID + "/" + newToken;
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
    getHomescreen: function(userID, callback) {
        url = 'https://bookclub-hd.herokuapp.com/users/getHomescreen/' + userID;
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
    }
}
