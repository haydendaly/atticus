module.exports = (bookID) => {
    url = 'https://bookclub-hd.herokuapp.com/books/get/' + bookID
    fetch(url, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return(responseJson);
    })
    .catch((error) => {
        alert(JSON.stringify(error));
        return([]);
    })
}