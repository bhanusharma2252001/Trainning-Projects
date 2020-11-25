function fun1() {
    var name="Bhavnesh sharma";
    //console.log("line no 3: "+name)
fun2();
    function fun2() {
    var name="Rahul verma";
    console.log("line no 7: "+name)
    fun3();

    function fun3() {
        //var name="kajal teetwal";
        console.log("line no 10: "+name)
        
    }
        
    }
    
}
fun1();