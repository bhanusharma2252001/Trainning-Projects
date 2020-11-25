var admin='have all acess';
var subAdmin='can delelte,write and modify test';
var testPrep='can write test';
var user='can consume content';
var getRole=function (name,role) {
    switch (role) {
        case "admin":
            return "Hi there "+ name+" you have all acess";
            break;
        case "subAdmin":
            return "Hi there "+ name+" you can delete write and modify tests";
            break;
        case "testPrep":
            return "Hi there "+ name+" you can write test";
            break;
        case "user":
            return "Hi there "+ name+" you can consume content";
            break;
        default:
            return "you are a trial users";
            break;
    }
    
}

console.log(getRole("Bhanu","admin"));
console.log(getRole("Manish","subAdmin"));
console.log(getRole("Kamal Pathak","testPrep"));