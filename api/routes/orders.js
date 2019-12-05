// 익스프레스를 불러온다 
const express = require('express');
// express 안에 있는 많은 모듈들 중에 .Router();를 쓰고 싶다 
// 이것을 router 라고 규정한다 
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const orderController = require('../controllers/order');
// 오더와 관련된 api 즉 order CRUD는 여기서 진행될 것이다 

//오더데이터 불러오기 
router.get('/', checkAuth, orderController.order_get_all);

//오더 상세데이터 불러오기 
router.get("/:order_id", checkAuth, orderController.order_get_detail);

//오더 데이터 생성하기 
router.post('/', checkAuth, orderController.order_post);

//오더 데이터 수정하기 
router.patch('/:order_id',checkAuth, orderController.order_update);

//오더 데이터 삭제하기 
router.delete('/:order_id', checkAuth,orderController.order_delete);



//라우터를 모듈화 시켜서 내보낸다 
module.exports = router;