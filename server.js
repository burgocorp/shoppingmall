
const express = require('express');
const app = express();

// server.js 파일에서  라우트를 만들어서 상수화 시켜준다 
//require(경로)를 orderRoute와 productRoute로 상수화 시켜준다 
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');





app.use('/products', productsRoute);
app.use('/orders', ordersRoute);




const port = 3000;
app.listen(port, console.log("server started.."));
















