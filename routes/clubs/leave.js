/*#################################################
For: SSW 322
By: Bruno, Hayden, Madeline, Miriam, and Scott
#################################################*/

let modelDict = require('../models/schema').modelDict;

module.exports = async function (req, res) {
  if(!req.params.clubID) {
    return res.status(400).send('Missing clubID')
  }
  if(!req.params.userID) {
    return res.status(400).send('Missing userID')
  }
  modelDict.club.findOne({
    "clubID" : req.params.clubID
  }, {
    _id : 0
  }).then(result => {
    if (result != null) {
      var originalLength = result.users.length
      for (var i = 0; i < originalLength; i++) {
        if (result.users[i] == req.params.userID) {
          result.users.splice(i, 1);
          break;
        }
      }
      if (result.users.length == originalLength) {
        res.send(false)
      }
      modelDict.club.updateOne({
        "clubID" : req.params.clubID
      }, {
        "users" : result.users
      }, {
        _id : 0
      }).then(result => {
        if (result.n == 1) {
          res.json(true)
        } else {
          res.json(false)
        }
      }).catch(err => {
        res.status(500).json(err)
      })
    } else {
      res.json(false);
    }
  }).catch(err => {
    res.status(500).json(err)
  })
}
