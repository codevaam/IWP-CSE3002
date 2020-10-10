var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/iwpProject');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favoriteArtist: [{ artistName: String, spotifyUri: String }],
  Interests: [{ artistName: String }],
  friends: [{ userID: String }],
  SpotifyConnected: { type: Boolean, default: false },
})

var user = db.model('User', userSchema);
router.post('/favorites/add', (req, res) => {
  var data = req.body
  console.log(req.body);
  user.findOne({ username: data.uname }, async (err, doc) => {
    if (err) return console.log(err);
    doc.favoriteArtist = data.artists;
    await doc.save();
    res.send({ success: true })
  })
});

module.exports = router;
