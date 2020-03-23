var num1=parseInt(prompt("Enter 1st number"));
var num2=parseInt(prompt("Enter 2nd number"));

function add(num1 , num2){
 var result = (num1 + num2);
 document.getElementById("add").innerHTML="Addition result is "+ result;
}
add(num1,num2);


