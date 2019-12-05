const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// 회원가입
router.post('/register', userController.user_register);


// 로그인

router.post('/login', userController.user_login);



// 회원삭제






module.exports = router;