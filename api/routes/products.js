const express = require('express');
const router = express.Router();

// 프로덕트와 관련된 api 즉 데이타CRUD 가 여기서 진행 될 것이다 
router.get('/', (req, res) => {
    res.json({
        msg: "productdata get"
    });
});



module.exports = router;