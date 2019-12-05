
const productModel = require('../models/product');



exports.products_get_all =  (req, res) => {

    productModel
        .find()
        .exec()
        .then(docs => {

            const response = {
                count : docs.length,
                productsInfo : docs.map(doc => {
                    return{
                        name : doc.name,
                        price : doc.price,
                        id : doc._id,
                        request : {
                            type : "GET",
                            url : "http://localhost:4000/products/" + doc._id
                        }
                    };
                })
            };

            res.json(response);
 
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });
    
};


exports.products_get_product =  (req, res) => {
    // url에서 추가 되는 변수값은 params이라고 한다 (디테일 경로)
    const id = req.params.product_id;
    productModel //<= 데이터를 담겨져 있는 그릇 
        .findById(id)// id를 찾는다 
        .exec()//실행시킨다
        .then(doc => {// 실행성공했을 때의 메시지 
        
            res.json({
                msg : "succesfull product data",
                productInfo : doc,
                request: {
                    type : "GET",
                    url : "http://localhost:4000/products/"
                }

            });
        })
        .catch(err =>{
            res.json({
                msg : err.message
            });
        });


};

exports.products_post =  (req, res) =>{
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
                 productInfo: result,
                 request: {
                     type : "GET",
                     url : "http://localhost:4000/products/" + result._id
                 }
             });
 
         })
         .catch(err => {
             res.json({
                 msg : err.message
             });
         });
 
 
 };

exports.products_update = (req, res) => {

    const id = req.params.product_id;

    const updateOps = {};
    // for문 찾아볼 것 
    // 업데이트 대상을 정의 한 것 
    for (ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }


    productModel
        .update({_id : id}, {$set : updateOps})
        .exec()
        .then(result => {
            res.json({
                msg : "updated product",
                productInfo : result,
                request : {
                    type : "GET",
                    url : "http://localhost:4000/products/" + id
                }

            });
            
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });
    
};

exports.products_delete = (req, res) =>{
 
    const id = req.params.product_id;

    productModel
        .remove({_id : id })
        .exec()
        .then(result => {
            res.json({
                msg : "deleted product",
                request : {
                    type : "GET",
                    url : "http://localhost:4000/products/"
                }

            });
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
         });



};