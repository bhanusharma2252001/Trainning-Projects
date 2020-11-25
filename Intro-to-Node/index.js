/*const fs=require('fs');
const random = require('@aspiesoft/random-number-js');
fs.copyFileSync("file1.txt","file2.txt");
var superheores=require('superheroes');
console.log(random());
console.log(superheores.random());

var UID="abc123";
var firstName="Bhavnesh";
var lastName="Sharma";
var email="bhanusharma252001@gmail.com";
var password="112233";
var confirmPassword="112233";
var city="Rudrapur";
var state="Uk";
var country="India";

console.log("UID"+UID
+" Name: "+firstName+lastName
+" Email: "+email
+" password: "+password
+" confirmPassword"+confirmPassword
+" city:"+city
+" state: "+state
+"country: "+country);
*/

var listingPrice=799;
var sellingPrice=199;
var discountPercentage=(listingPrice-sellingPrice)/listingPrice*100;
console.log(Math.round(discountPercentage)+"% off");
