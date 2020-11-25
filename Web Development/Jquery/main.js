//manupulating CSS 
$("h1.test"). addClass("test");
var x=$("h1").hasClass("test");
console.log(x);
//$("h1.test"). removeClass("test");

//manupulating text and innner HTML
$("h2").text("Text changed by jquery");
$("h2").html("<em> HTML Tag inside heading</em>");
$("button").text("Text changed by Jquery");
$("a.home").text("World changed");
$("a#contact").text("working");

//manupulating attributes with Jquery
console.log($("img").attr("src"));
$("img").attr("src","rahul.png");
console.log($("img").attr("src"));
$("img").prop("width","400");
console.log($("img").prop("width"));

//adding Event listener


$("h1").click(function()
{
//$("h1").hide();
//$("h1").show();
});

$(document).keypress(function(event)
{
      $("h1").toggle();
});

$("h1.test").on("mouseover",function()
{
    $("h1.test").css("color","red");
});

//adding or removing elements
$("h1").after("<p>This is my paragraph</p>");
$("h1").before("<p>This is my paragraph</p>");
$("h1").append("<i>This is my is appned paragraph</i>");
$("h1").prepend("<i>This is my preappend paragraph</i>");
//$("h1").remove();

