var express = require('express');
const { route } = require('./login');
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

router.post('/favArtists', (req, res) => {
    console.log(req.body);
    user.findOne({username: req.body.user}, (err, doc) => {
        res.send({success: true, artists: doc.favoriteArtist});
    })
})

router.post('/getUsers', (req, res)=> {
    user.find({}, (err, doc) => {
        res.send({success: true, users: doc})
    })
})

module.exports = router;