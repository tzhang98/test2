/*********************************************************************************
* BTI325 – test1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: ___TIANCHEN ZHANG________ Student ID: ___101569218_______ Date: __2022/10/5_______
*
* Online (Cyclic) URL:
* __https://distinct-gold-bull.cyclic.app/
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path")






app.get("/", (req, res)=>{
    let resText =" <h2>I declare that that this test is my own work in accordance with seneca academic policy: No part of this teast has been copied manually or electronically from any other source.<h2/><br><h2>Name:Tianchen Zhang<br>Student Number:101569218</h2>"
    resText += "<a href='/test1'> Go to Test1 </a>";
    res.send(resText);
});

app.get("/test1",(req,res)=>{
    res.sendFile(path.join(__dirname,"/view/test1.html"));
}
);



app.use(function(req,res){
    res.status(404).send("Page Not Found"); 
});





    function onHttpStart() {
        console.log("Express http server listening on: " + HTTP_PORT);
    }

    app.listen(HTTP_PORT,onHttpStart);


