const orderModel = require('../models/orders');

const productModel = require('../models/product');



exports.order_get_all = (req, res) => {

    orderModel
        .find()
        .exec()
        .then(docs => {

            const response = {
                count : docs.length,
                orderInfo : docs.map(doc => {
                    return{
                        product : doc.product,
                        qty : doc.qty,
                        id : doc._id,
                        request : {
                            type : "GET",
                            url : "http://localhost:4000/orders/" + doc._id
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

exports.order_get_detail = (req, res) => {

    const id = req.params.order_id;
    orderModel
        .findById(id)
        .exec()
        .then(doc => {

            res.json({
                msg : "successfull get detail order data",
                orderInfo : doc,
                request : {
                    type : "GET",
                    url : "http://localhost:4000/orders/"
                }
            });
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });
};

exports.order_post = (req, res) => {
    // 먼저 제품 아이디 검색한다 -> 
    productModel
        .findById(req.body.productid)
        .exec()
        .then(result => {
            // productid가 없으면 아래 출력 
            if (!result){
                return res.json({
                    msg : "no product id"
                });
            } else {
                // product id가 있으면 오더모델에 저장하고 프로세스가 나간다 
                const order = new orderModel({
                    product : req.body.productid,
                    qty : req.body.qty
                });
            
                order
                    .save()
                    .then(doc => {
                        res.json({
                            msg : "successfull posting order data",
                            orderInfo : doc,
                            request :{
                                type :"GET",
                                url : "http://localhost:4000/orders/" + doc._id
                            }
                        })
                    })
                    .catch(err => {
                        res.json({
                            msg : err.message
                        });
                    });
            }
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });


   



};

exports.order_update = (req, res) => {

    const id = req.params.order_id;

    const updateOps = {};

    for (ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    orderModel
        .update({_id : id } , {$set : updateOps})
        .exec()
        .then(result => {
            res.json({
                msg : "updated order data",
                orderInfo : result,
                request : {
                    type : "GET",
                    url : "http://localhost:4000/orders/" + id
                }

            });
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });

};

exports.order_delete = (req, res) => {

    const id = req.params.order_id;

    orderModel
        .remove({_id : id })
        .exec()
        .then(result => {
            res.json({
                msg : "deleted order data",
                request: {
                    type : "GET",
                    url : "http://localhost:4000/orders/"

                }
                
            });
        })
        .catch(err => {
            res.json({
                msg : err.message
            });
        });
   
};

