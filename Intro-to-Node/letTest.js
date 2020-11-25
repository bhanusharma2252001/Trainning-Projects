var globalVariable="ImGlobal";
console.log(globalVariable);
function test()
{
    if(true)
    {
    let letVariable="Hello I m local";
   
    globalVariable="ValueChanged";
    console.log(globalVariable);
    }
}
test();
console.log(letVariable);
console.log(globalVariable);
