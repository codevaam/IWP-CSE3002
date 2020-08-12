const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    var scopes = 'user-read-private user-read-email';
    //var my_client_id = 
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
})


module.exports = router;