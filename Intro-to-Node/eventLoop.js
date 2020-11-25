const a= ()=> {
    console.log("Hi this is function A");
    
}

const b= ()=> {
    console.log("Hi there this is function B");
    setTimeout(() => {
        console.log("Please, You've been wait for 3 seconds");
        
    }, 3000);
}

const c= ()=> {
    console.log("Hi there this is function C");
    
}
a();
c();
b();