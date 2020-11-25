var Bhanu=
{
    firstName:"Bhanu",
    lastName:"Sharma",
    DOB:"2 may 2001",
    city:"Rudrapur",
    getinfo:function () {
        console.log('hi '+this.firstName+" last name is "+this.lastName+" Your DOB is "+this.DOB+" and your city is " +this.city)
    }
}
//console.log(user.getinfo());
var aashu=
{
    firstName:"Aashu",
    lastName:"Gupta",
    DOB:" 2 jan 2001",
    city:"Kanpur"
}
//console.log(aashu);
//var test=Bhanu.getinfo.bind(aashu);//bind returns reference of function which ran by bind
//test();
console.log(Bhanu.getinfo.call(aashu));// call directly runs the function 
