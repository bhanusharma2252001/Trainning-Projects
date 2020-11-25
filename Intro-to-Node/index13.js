var user=
{
    name:"Bhavnesh Sharma",
    role:"admin",
    loggedInCount:12,
    courseList:[],
    buyCourse:function(courseName)
    {
        this.courseList.push(courseName);
    
    },
    getCourseAndLoggedinCount:function()
    {
        console.log(this.courseList);
        console.log(this.loggedInCount);
    },
    getAllinfo: function()
    {
        console.log("Hi"+this.name+" you are "+this.role+"and you have logged in"+this.loggedInCount+" times and you've bought"+this.courseList+"courses");
    }

}
user.buyCourse("ReactJs");
console.log(user.getCourseAndLoggedinCount());
console.log(user.getAllinfo());