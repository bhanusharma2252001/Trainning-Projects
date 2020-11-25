function isEven(element)
{
return element%2==0;
}
var result=[2,4,6,6].every((e)=>e%2===0);
console.log(result);