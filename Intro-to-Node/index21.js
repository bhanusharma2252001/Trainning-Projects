
var key1='mytr',key2={},key3=function () {}
var myMap=new Map();
myMap.set(key1,"This is a string");
myMap.set(key2,"this is a empty object");
myMap.set(key3,"this is empty function");
//console.log(myMap);
let myArray=Array.from(myMap);
console.log(`my array is ${myArray}`);
