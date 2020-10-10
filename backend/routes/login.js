var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var md5 = require('md5');


// var artistSchema = new mongoose.Schema({
//   artistName: String,
//   spotifyUri: String
// })

// var messageSchema = new mongoose.Schema({
//   msgString: String,
//   timeStamp: Date
// })
// var favoriteGenre = new mongoose.Schema({
//   genre: [{genreName: String, matchScore: Number}],
// })

const db = mongoose.createConnection('mongodb://localhost:27017/iwpProject');
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favoriteArtist: [{ artistName: String, spotifyUri: String }],
  Interests: [{ artistName: String, spotifyUri: String }],
  friends: [{ userID: String }],
  SpotifyConnected: { type: Boolean, default: false },
})

var User = db.model('Users', userSchema);

router.post('/register', (req, res) => {
  var user = new User({
    username: req.body.uname,
    password: md5(req.body.psw)
  })
  user.save(function (err, user) {
    if (err) return console.log(err);
    console.log(user.username + ' saved to the db');
    res.send({ success: true })
  })
})

router.post('/login', (req, res) => {
  User.findOne({ username: req.body.uname }, (err, user) => {
    console.log(user);
    if (err) res.send({ success: false });
    if (user.password === md5(req.body.psw)) {
      if (user.Interests.length === 0) {
        res.send({ success: true, newAccount: true })
      }
      else {
        res.send({ success: true, newAccount: false })
      }
    }
    else {
      res.send({ success: false })
    }
  })

})

module.exports = router;

