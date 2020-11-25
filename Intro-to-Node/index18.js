function getValue() {
    var name="Bhanu";
    console.log("Hi i'm Bhanu");
    function Getname() {
        console.log(name);
        
    }
    return Getname;
    
}//returning function cause of closure
var test=getValue();
test();
function doAddition(x) {
    function add(y) {
        return x+y;
    }
    return add;
}
test=doAddition(8);//first way
console.log(test(2));
console.log(doAddition(4)(5));//second way 