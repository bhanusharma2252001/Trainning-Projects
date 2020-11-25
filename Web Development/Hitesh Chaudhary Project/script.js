var courses=[
    {
        name:"Learn JavaScript for Free",
        fee:"3$"
    },

    {
        name:"Learn AngularJS for Free",
        fee:"3.5$"
    },

    {
        name:"Learn ReactJs for Free",
        fee:"2.7$"
    },

    {
        name:"Learn MernStack for Free",
        fee:"4.3$"
    }
];

function GenerateList() {
    var ul=document.querySelector(".list-group");
    //ul.innerHTML="";
    courses.forEach(course => {
        var li=document.createElement("li");
        li.classList.add("list-group-item");
     var name=document.createTextNode(course.name);
     li.appendChild(name);
    
        var price=document.createElement("span");
        price.classList.add("float-right");
        var spanTextNode=document.createTextNode("$"+course.fee);
        price.appendChild(spanTextNode);
        li.appendChild(price)
        ul.appendChild(li);
        
    });
    
}
GenerateList();

var button=document.querySelector(".sort-btn");
button.addEventListener ("click",()=>
{
    courses.sort((a,b) => a.price-b.price);
    GenerateList();
});
var test='bhanu';
console.log(`bhanu ${test}`);

