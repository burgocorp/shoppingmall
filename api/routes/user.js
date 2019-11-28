const express = require('express');
const router = express.Router();

const userModel = require('../models/user');


// 회원가입
router.post('/register', (req, res) => {
    const user = new userModel({
        name : req.body.username,
        email : req.body.email,
        password : req.body.password
    });

    user
        .save()
        .then(result => {
            res.json({
                msg : "registered user",
                userInfo : result
            });
           
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });

});


// 로그인

router.post('/login', (req, res) => {

});



// 회원삭제






module.exports = router;