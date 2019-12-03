var express = require("express");
var router = express();
var mysql = require("mysql")

var conncetion = mysql.createConnection({
    host : "172.18.5.193",
    database : "database",
    user : "root",
    password : "manager",
    port : 9090
   
})
conncetion.connect();
router.use(express.json());


router.get("/",(request,response)=>{
    var queryText = `SELECT * FROM product`;
    conncetion.query(queryText,(error,result)=>{
        if(error == null)
        {
            console.log("SELECT IS DONE");
            response.send(JSON.stringify(result));
        }
        else
        {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
})

module.exports=router;