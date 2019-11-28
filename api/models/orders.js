const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
//type에 몽구스에 있는 오브젝트 아이디에 있는 것
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product', //참조 : 프로덕트에 있는 항목
        required : true
    },
    qty : {
        type : Number,
        default : 1 //기본값은 1
    }


});


module.exports = mongoose.model("order", orderSchema);