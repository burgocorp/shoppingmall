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
    // email 유무체크 => password 가 맞는지 체크(decoding) => response 출력
    userModel
        .findOne({email : req.body.email})
        .exec()
        .then(user => {
            // req.body.email(사용자 입력 이메일) 이 없으면 아래출력 
            if (user.length < 1){
                return res.json({
                    msg : "등록된 이메일이 없음"
                });
                
            } else {
                console.log(user.password);

                // db에 유저 이메일이 있을 경우 
                // password가 맞는지 체크 후 디코딩 
                bcrypt.compare(req.body.password, user.password,(err,result) => {
                    if(err){
                        return res.json({
                            msg : "패스워드를 다시 입력하세요"
                        });

                    }
                    if (result){
                        res.json({
                            msg : "successfull login"
                        });
                    }
                    res.json({
                        msg : "login failed"
                    });


                })
                
                
            }

        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });

});



// 회원삭제






module.exports = router;