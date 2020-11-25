const express=require("express");
const { redirect } = require("express/lib/response");
const app=express();

app.get("/",(req,res)=>
 {
res.send("<h1>hello world</h1><p>Paragrahp</p>");   
})
app.get("/contact",(req,res)=>
{ 
   res.send("<h1>Hi there, Contact me bhanusharma252001@gmail.com");
})
app.get("/About",(req,res)=>
{
   res.send("<h3>Hi there my Name is Bhavnesh Sharma and I'm a Full Stack Developer.</h3>");
})
app.get("/hobby",(req,res)=>
{
   res.send("<h3>Hi there, My Hobbies are reading Novels and Books</h3>");
})

 
app.listen(3000,function () {
   console.log("Server started on port 3000"); 
})
