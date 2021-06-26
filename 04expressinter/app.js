
const express= require("express");
const app=express();

var myconsolelog=function(req,res,next){
    console.log("I am a MiddleWare");
    next();
}
app.use(myconsolelog);

app.get("/",(req,res)=>{
    res.send("Hello World");
    console.log("Hello world from /")
});


app.listen(4000,()=>console.log("Server is running at prort 4000..."));