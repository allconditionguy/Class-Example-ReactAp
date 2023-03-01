function myFunction() {
  // this is a commment
  /* 
              this is 
              a comment spanning multiple lines
              */
  // var, let, const
  var my_name = "Tony";
  var my_age = 20;

  if (my_age > 100) {
    document.getElementById("demo").style.color = "#000000";
    document.getElementById("demo").style.fontSize = "30px";
    document.getElementById("demo").innerHTML =
      my_name + " is " + my_age + " years old " + 3 * 4;
  } else {
    document.getElementById("demo").style.color = "#FF0000";
    document.getElementById("demo").style.fontSize = "20px";
    document.getElementById("demo").innerHTML = "Sorry, you are too young";
  }
}

function Sum1(a, b) {
  return a + b;
}
// a function that does not have a name s=us an anonymous function
const Sum2 = function (a, b) {
  return a + b;
}; // this is know as function expression
const Sum3 = (a, b) => {
  return a + b;
}; // arrow expression

/**
 * functions can be passed to another function as a variable
 * A function that can take another function as arguments
 */

Kofi(function (a, b) {
  return a + b;
});

Kofi2((a, b) => {
  returna + b;
});
/**
 * Read on Closure
 */
