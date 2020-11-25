const { response } = require("express");
const express=require("express");
const app=express();
const bodyParse=require("body-parser");
const http=require("http");
app.listen(3000,()=>
{
    console.log("Server started on port 3000");
})
 app.use(bodyParse.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
  res.sendFile(__dirname+"/index.html");  
   
})
app.post("/",(req,res)=>
{
    console.log("Post recieved");
    const city=req.body.cityName;
const apiKey="5610d8cec317e8b1c6c600104a583465";
const url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"";

http.get(url,(response)=>
{
    console.log(response.statusCode);
response.on("data",(data)=>
{
    const weatherData=JSON.parse(data);
    const temp=weatherData.main.temp;
    const desc=weatherData.weather[0].description;
    const icon=weatherData.weather[0].icon;
    const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";  
    res.send("<body bgcolor='#fff'><center><h3>The weather is currently "+desc+"</h3>"+"<h1> The temperature of "+city+" is " +temp+"</h1>"+" <img src="+imgURL+"></center></body>");
})
})
})


