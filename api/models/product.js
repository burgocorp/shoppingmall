// 여기는 데이터를 담을 그릇을 정의해준 것이다 



const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    price : Number

});







module.exports = mongoose.model("product", productSchema);





