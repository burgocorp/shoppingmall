
const express = require('express');
const app = express();
//몽구스라이브러리를 불러온다
const mongoose = require('mongoose'); 
//morgan을 불러온다 
const morgan = require('morgan');
const bodyParser = require('body-parser');



// server.js 파일에서  라우트를 만들어서 상수화 시켜준다 
//require(경로)를 orderRoute와 productRoute로 상수화 시켜준다 
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');
const usersRoute = require('./api/routes/user');

//몽고디비연결 코드 , 유알엘을 넣어준다 
const mongoDBurl = "mongodb+srv://myounghwan:qnfmrh0228@cluster0-1dywn.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err.message));


    //다양한 버젼을 테스트 해볼것
app.use(morgan("dev"));
//body-parser 추가 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use('/user', usersRoute);



const port = 4000;
app.listen(port, console.log("server started.."));
















