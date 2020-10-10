var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var io = require('socket.io')(http);
var mongoose = require('mongoose');


const db = mongoose.createConnection('mongodb://localhost:27017/iwpProject');
var Message = mongoose.model('Message', { name: String, message: String })

// io.on('message', addMessages)

io.on('connection', () => {
    console.log('a user is connected')
})

router.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
})

router.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) => {
        if (err)
            sendStatus(500);
        io.emit('message', req.body);
        res.sendStatus(200);
    })
})



module.exports = router;