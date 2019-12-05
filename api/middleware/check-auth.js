const jwt = require('jsonwebtoken');

module.exports = (req,res, next) => {
    // try catch 문 찾아볼 것 
    try {
        //토큰을 검증해주는 코드 
       const token = req.headers.authorization.split(" ")[1];
       const decoded = jwt.verify(token, 'secret');
       req.userData = decoded;
       next();

    } catch(err) {

        return res.json({
            msg : "auth failed"
        });

    }
}