const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/product');

// 프로덕트와 관련된 api 즉 데이타CRUD 가 여기서 진행 될 것이다 

// products 전체 데이타 불러오기 
router.get('/', productController.products_get_all);


// 상세 프로덕트 불러오기 
router.get('/:product_id', checkAuth, productController.products_get_product);



// product 데이터 생성하기 
router.post('/', checkAuth, productController.products_post);

// products 데이터 수정하기 
router.patch('/:product_id', checkAuth, productController.products_update);




// products 데이터 삭제하기 
router.delete('/:product_id', checkAuth, productController.products_delete);



module.exports = router;