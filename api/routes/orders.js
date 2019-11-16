// 익스프레스를 불러온다 
const express = require('express');
// express 안에 있는 많은 모듈들 중에 .Router();를 쓰고 싶다 
// 이것을 router 라고 규정한다 
const router = express.Router();

// 오더와 관련된 api 즉 order CRUD는 여기서 진행될 것이다 

//오더데이터 불러오기 
router.get('/', (req, res) => {
    res.json({
        msg: "orderdate get"
    });
});

//오더 데이터 생성하기 
router.post('/', (req, res) => {
    res.json({
        msg: "데이터 생성됨"
    });
});

//오더 데이터 수정하기 
router.patch('/', (req, res) => {
    res.json({
        msg: "데이터 수정하기"
    });
});

//오더 데이터 삭제하기 
router.delete('/', (req, res) => {
    res.json({
        msg: "데이터 삭제하기"
    });
});



//라우터를 모듈화 시켜서 내보낸다 
module.exports = router;