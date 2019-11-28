const express = require('express');
const router = express.Router();
 //password 암호화 library
const bcrypt = require('bcryptjs');
const userModel = require('../models/user');


// 회원가입
router.post('/register', (req, res) => {
    

    // 이메일 유무 체크 
    userModel
        .findOne({email: req.body.email})
        .exec()
        .then(result => {
            if (result) {
                return res.json({
                    msg : "mail exists"
                });
            } else {
                //패스워드 암호화
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.json({
                            msg : err.message
                        });
                    } else {
                        const user = new userModel({
                            name : req.body.username,
                            email : req.body.email,
                            password : hash
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
            
                    }
                })

            }
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