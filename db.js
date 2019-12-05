const mongoose = require('mongoose'); 


//몽고디비연결 코드 , 유알엘을 넣어준다 
const mongoDBurl = "mongodb+srv://myounghwan:qnfmrh0228@cluster0-1dywn.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err.message));