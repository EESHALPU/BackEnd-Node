
const express= require("express");
const app=express();

var myconsolelog=function(req,res,next){
    console.log("I am a MiddleWare");
    next();
}

var serverTime=function(req,res,next){
    req.requestTime=Date.now();
    next();
}

app.use(serverTime);

app.get("/",(req,res)=>{
    res.send("Hello World"+" and Time is : "+req.requestTime);
    console.log("Hello world from /")
});


app.listen(4000,()=>console.log("Server is running at prort 4000..."));