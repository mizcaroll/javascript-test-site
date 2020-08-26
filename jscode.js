/* how to use a confirmation statement and an if after it

function blahblah() {
  var confirmation = confirm("These changes are final");
  if (confirmation == true) {

    the rest of the blablah function code goes here
  }
}
end of*/

/* html code for mouseout 
<p id="para" onmouseover="changeBackground()" onmouseout="backToNormal()">Testing a new event on this text</p> 
javascript code bbelow

function changeBackground() {

  var text = document.getElementById("para").style.backgroundColor = "red";
  
  } 
  function backToNormal() {
  
  var text = document.getElementById("para").style.backgroundColor = "";
  
  } */
/*
function changestyle() {
 
 document.getElementById("image").src = "js logo2.jpg";
 
 }*/ 

 /*function changestyle() {

var paragraph = document.getElementsByClassName("para");

var firstParaText = paragraph[0].innerHTML;
var secondParaText = paragraph[1].innerHTML;
var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;

var firstParaText = paragraph[0].innerHTML = " ";
var secondParaText = paragraph[1].innerHTML = " ";

} */

//var text = document.getElementById("para1").style.color = "blue";

/*var orc = {
hair: "green", color: "red", height:5
}
orc.weight = 10;
document.write("the orc has a height of " + orc.height + " and a weight of " + orc.weight)*/

/*function add(x,y)
{
  result = x + y;
  return result;

}
var theResulst = add(3,5);
document.write(theResulst) */

//the below else if code won't work for some reason

/*function rounders(player, distance)
{
  if (distance <= 300 && distance > 0) {
document.write( player + " hit the ball");
  }
  else if (distacnce <= 0 ) {
    document.write( player + " missed the ball or as Americans would say.. struck out");
  }
  else {
    document.write( player + " hit gate ya akina eric");
  }
}
rounders("Mwema", 0); */

/*for loop is similar to the while loop but puts all three statements inside the brackets, separated by a semicolon

for ( var i =1; i<5; i++) {
  document.write( "running from myself no more.." )
} */

/*while loops will keep executing a condition for as long as it is true

var i = 1;

while(i<5)
{
  document.write (i);
  i++;
} */

/*if conditional statement
var food = "Fast Food";

if ( food == "Apple") {
  alert( "We ate some fruit, specifically apples");
}
else if ( food == "Meat") {
  alert("We ate some Meat");
}
else if ( food == "Fast Food") {
  alert("We ate fast food");
}
else {

alert("We might have gone hungry that day");
} */

/* ==========================================================================document.write("We are now using a JS file");
function addSomething(num,str) 
{
var add = num + str;
alert(add);
}
addSomething (500," programs to write")*/

/*var number1 = 7;
var number2 = 5;

//var number1 = number1 + number2;
//see below a compound operator that does the exact same thing
number1 += number2;

//incremental operator
number1++;
//incremental operator number1--;

document.write(number1); */


