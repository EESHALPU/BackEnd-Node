const express= require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.get("/about-us",(req,res)=>{
    res.json({id:"121",user:"Raman",balance:"12000"})
    
});

app.get("/user-detail",(req,res)=>{
    res.json({id:"121",user:"Raman",balance:"12000"})
    
});

app.get("/ab*cd",()=>{
    res.send("I am regex page");
});


app.get("/user/:id/status/:status_id",(req,res)=>{
    res.send(req.params);
});

app.get("/flights/:from-:to",(req,res)=>{
    res.send(req.params)
})

app.get("/contact",(req,res)=>{
    res.send("This is Contact Us page");
});

app.get("/service",(req,res)=>{
    res.send("<ul><li>React Js</li> <li>Node  Js</li> <li>Java</li></ul>");
});

app.post("/login",(req,res)=>{
    res.send("login Success");
});

app.delete("/delete",(req,res)=>{
    res.send("delete successful");
});

app.listen(3000,()=>console.log("Server is running at prort 3000..."));