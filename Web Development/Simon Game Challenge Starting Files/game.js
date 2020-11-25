var gamepattern=[];
var userClickedPattern=[];
var num=0;
var started=false;
document.addEventListener("keypress",myFunction);
function myFunction()
{
    if (!started)
    {
    $("#level-title").text("level "+num);
    nextSequence();
    started=true;
    }
}
var buttonColor=["red","blue","green","yellow"];

$(".btn").click("click",function handler()
    {
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    }
);  
console.log("working");
function nextSequence()
{
    userClickedPattern=[];
    num++;
    $("#level-title").text("level "+num);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColor[randomNumber];
    console.log(randomChosenColor);
    gamepattern.push(randomChosenColor);
    console.log(randomNumber);
    //$("#"+randomChosenColor).fadeIn(100).fadeOut(100),fadeIn(100);
    playsound(randomChosenColor);  
    animatePress(randomChosenColor);
    
     

}
 
 
 function playsound(name)
{
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
}

function animatePress(currentColor)
{
    
$("#"+currentColor).addClass("pressed");
 setTimeout(function()
 {
    $("#"+currentColor).removeClass("pressed");
 },100);
}

function checkAnswer(currentLevel)
{
   if (gamepattern[currentLevel]===userClickedPattern[currentLevel]){
       console.log("sucess");
       if (userClickedPattern.length===gamepattern.length)
       {
           setTimeout(function(){
               nextSequence();},1000);
       }
   }
   else{
       $("body").addClass("game-over");
       var audio=new Audio("sounds/wrong.mp3");
       audio.play();
       setTimeout(function()
       {
        $("body").removeClass("game-over");
       },1000);
       $("#level-title").text("Game Over, Press any key to restart");
       startover();
}
}

function startover()
{
num=0;
started=false;
gamepattern=[];
}