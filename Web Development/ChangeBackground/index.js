

var x=document.querySelector("button")
x.addEventListener("click",myFunction);
function myFunction()
{
 var colors=["red","green","brown","yellow","black","orange","blue","grey","gold","lightgreen"]
 var randomColor=Math.round(Math.random()*colors.length);

        document.body.style.backgroundColor =colors[randomColor];

}