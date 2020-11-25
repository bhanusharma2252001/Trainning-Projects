fetch("https://api.chucknorris.io/jokes/random")
.then((Response)=>
{
return Response.json();
})  
.then((data) =>
{
var joke=data.value;
console.log("Joke: "+joke);
})
.catch();