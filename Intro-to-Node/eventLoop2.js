const a= ()=> {
    return "Hi this is function A";
    
}

const b= ()=> {
        return new Promise((resolve,reject) =>{
              setTimeout(()=>
              {
                  resolve("I am two");
              },3000);
          });
        }

const c= ()=> {
    return "Hi there this is function C";
    
}
 const callMe=async ()=> {
     const valOne=a();
     console.log(valOne);
     const valTwo=await b();
     console.log(valTwo);
     const valThree=c();
     console.log(valThree);
     
 }

 callMe();