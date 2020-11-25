class student// Creating Class
{
    constructor(name,rollNo,city)
    {
        this.name=name;
        this.rollNo=rollNo;
        this.city=city;
    }
    #coursesCount=[];//Private properties
    courseCount2=[]
    getInfo()
    {
        return "Name is "+this.name+" and Roll no is "+this.rollNo+" and city is "+this.city;
    }

     static memberStatic="Private members in JavaScript";
     getStaticMember()
     {
         console.log(this.memberStatic);
     }
    byCourse(course)
    {
        this.#coursesCount.push(course);
        return this.#coursesCount;
    }
    overRideMethod()
    {
        console.log("This is method of parent class");
    }
}
var student1=new student("Bhavnesh sharma",02,"Rdr");
// //console.log(student1);
// console.log(student1.byCourse("Mern Stack Bootcamp"));
// //console.log(student1.getInfo());
// console.log(student1.coursesCount);
// module.exports= student;

class student2 extends student
{
     constructor (name,rollNo,city,course2)
     {
         course2;
          super(name,rollNo,city);
    this.course2=course2;
        // this.name=name;
        // this.rollNo=rollNo;
        // this.city=city;
     }
    showinfo()
    {
        return this.getInfo+this.name+this.rollNo+this.city+"and you are in this course"+this.course2;
    }
    getinfo2()
    {
        console.log("Hi there this is children function");
    }
    overRideMethod()  //overRidden Method
    {
        console.log("This is overRidden method of child class");
    }
}

     
// var user= new student2("Ram",03,"Rudrapur");
// var user1= new student("Bhanu",05,"Meerut");
// console.log(user.getinfo2());
// user.getStaticMember();
// user.overRideMethod();
// user1.overRideMethod();
// console.log(user.buyCourse2("learn MongoDB"));
var user=new student2("Bhanu",04,"Rudrapur","BCA");
console.log(user.showinfo());