function user(id,name,fName,mName,DOB,city,state,country)
{
this.id=id;
this.name=name;
this.fName=fName;
this.mName=mName;
this.DOB=DOB;
this.city=city;
this.state=state;
this.country=country;
this.getInfo=function () {
    console.log("Hi "+name+" your ID is : "+id+" and your Father name is: "+fName+"mother name is:"+mName+"and your DOB is: "+DOB+" your city is: "+city+" and your state name is:"+ state+ "your country name is: "+country);
    
}
}
user.prototype.getName=function()
{
    console.log(this.name);
}
user.prototype.Gf="her";
var user1=new user(01,"Bhavnesh Sharma","Bhupendra Sharma","Premvati","2 may 2001","Rudrapur","UK","India","something");
var user2=new user(02,"Ram Sharma","Bhupendra Sharma","Premvati","2 may 1999","Rudrapur","UK","India","someone");

if (user1.hasOwnProperty("Gf"))
{
    console.log(user1.Gf);
}
//user2.getName();
//console.log(user1.Gf);
//console.log(user2.Gf);