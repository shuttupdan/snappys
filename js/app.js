$(document).foundation()

console.log("Date Time Script");

var  date = new Date();  //this creates a snapshot of the current time and day using the date object and stores it in a variable called date

var min = date.getMinutes(); // getDay() pulls the day out of the date object and stores it in a new variable called day. Days are recalled as integers 0,1,...6  - starting on Sunday

// Use comments to disable pieces of code
/* this is a way to comment a bunch of code */

switch(sec)
{
case 0:
  document.getElementById("thisone").innerHTML = "is this working yet";
  break;
/*case 1:
  document.getElementById("output").innerHTML = "Heute ist Montag";
  document.getElementById("output").style.color = "red";

  break;
case 3:
 document.getElementById("output").innerHTML = "Hoy es Miercoles";
  break;

  case 6:
 document.getElementById("output").innerHTML = "今天是周六";
  break;*/

  default:
 document.getElementById("homelink").src = "http://placehold.it/350x100";
}

//Make something coo
