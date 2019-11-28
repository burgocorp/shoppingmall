const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        //email validation regular expression,  email regex 로 검색할 것  
        match : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required : true
    },
    password : {
        type : String,
        required : true
    }


});




module.exports = mongoose.model("user", userSchema);