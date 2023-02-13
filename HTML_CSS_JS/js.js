function myFunction() {
    


    // this is a commment
    /* 
    this is 
    a comment spanning multiple lines
    */
    // var, let, const
    var my_name = "Tony";
    var my_age = 20;
    
    if(my_age > 100) {
        document.getElementById("demo").style.color = "#000000";
        document.getElementById("demo").style.fontSize = "30px";
        document.getElementById("demo").innerHTML = my_name + " is " + 
        my_age + " years old " + 3 * 4;
    }
    else {
        document.getElementById("demo").style.color = "#FF0000";
        document.getElementById("demo").style.fontSize = "20px";
        document.getElementById("demo").innerHTML = "Sorry, you are too young";
    }


}