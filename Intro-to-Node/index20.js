var myMap=new Map();
myMap.set(1,"Rahul Kumar");
myMap.set(2,"Kajal Kumari");
myMap.set(3,"Prem Kumar");
myMap.set(4,"Shahil Kumar");

console.log(myMap);
for (const key of myMap.keys()) {
    console.log(`key is ${key}`);
    
}
for (const test of myMap.values()) {
    console.log(`value is ${test}`);
    
} 

for (const [key,value] of myMap) {
    console.log(`key is ${key} and value is ${value}`);
    
}
myMap.forEach((value,key) => {
    
    console.log(`value is ${value} and key is ${key}`);
});
