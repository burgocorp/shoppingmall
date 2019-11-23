const express = require('express');
const router = express.Router();
const productModel = require('../models/product');

// 프로덕트와 관련된 api 즉 데이타CRUD 가 여기서 진행 될 것이다 

// products데이타 불러오기 
router.get('/', (req, res) => {
    res.json({
        msg: "productdata get"
    });
});

// product 데이터 생성하기 
router.post('/', (req, res) =>{
   //바디파서는 사용자입력값을 쉽게 구분해주기 위한 라이브러리다 
    const product = new productModel({
        name : req.body.productname,
        price : req.body.productprice
    });

    product
        .save()
        .then(result => {
            res.json({
                msg : "sucessful posting product data...",
                productInfo: result
            });

        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });


});

// products 데이터 수정하기 
router.patch('/', (req, res) => {
    res.json({
        msg: "데이터 수정됨"
    });
});

// products 데이터 삭제하기 
router.delete('/', (req, res) =>{
    res.json({
        msg: "데이터 삭제하기"
    });
});



module.exports = router;