/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

let modelDict = require('../models/schema').modelDict;
let getBook = require('../external/main').getBook;

var generateID = async function (callback) {
  var clubID = Math.random().toString(36).replace('0.', '').slice(0, 5);
  modelDict.club.findOne({
    'clubID' : clubID
  }).then(result => {
    if (result !== null) {
      generateID(function(result) {
        callback(result);
      })
    } else {
      callback(clubID);
    }
  })
}

var checkBook = async function(bookID, callback) {
  modelDict.book.findOne({
    'bookID' : bookID
  }, {
    _id : 0
  }).then(result => {
    if (result != null) {
      callback(result.title);
    } else {
      getBook(bookID, function(bookData){
        var model = new modelDict.book(bookData);
        model.save(bookData)
        .then(result => {
          if(result != null) {
            callback(result.title);
          } else {
            callback(false);
          }
        });
      });
    }
  }).catch(err => {
    res.status(500).json(err);
  });
}

// NEED TO UPDATE USER CLUBS FIELD

module.exports = async function (req, res) {
  generateID(function(clubID) {
    req.body.clubID = clubID;
    checkBook(req.body.bookID, function(title) {
      req.body.title = title;
      var model = new modelDict.club(req.body);
      model.save(req.body)
      .then(result => {
        if(result != null) {
          res.json({
            'clubID' : req.body.clubID
          });
        } else {
          res.json(false);
        }
      });
    });
  });
}
