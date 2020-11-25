const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,()=>
{
    console.log("server started on port 3000");
})

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>
{
    var height=parseFloat((req.body.height));
    var weight=parseFloat((req.body.weight))
    var BMI=weight/(height*height);
    res.send("Your BMI is: "+BMI);
})
