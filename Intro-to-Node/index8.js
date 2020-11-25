function greet(name) {
    console.log("Hi there"+name);
    
}
function test(greet) {
    console.log("This is inner function");
    greet("Bhanu");
}
test(greet);