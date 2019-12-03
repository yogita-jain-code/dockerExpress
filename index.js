var express = require("express")
var prodRouter = require("./routes/product");

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use("/",(request,response)=>{
//     response.send("THIS IS THE DOCKER FILE");
// })
app.use("/product",prodRouter);

app.listen(9999,()=>{
    console.log("SERVER IS STARTED AT PORT NO 9898");
})