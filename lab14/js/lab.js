/* 
Adam Aviles
ART 101
Lab 13: Loops
Requirements: JQuery must be loaded in order for this to work.
*/ 

outputEl = document.getElementById("output");


function fizzBuzzBoom(num) {
  for (i=0; i<=num; i++){
    var outputStr = ""
    //mod combos
    if (i == 0) {
      outputStr += "FizzBuzzBoom"
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      outputStr += "FizzBuzz"
      $("#output").append("<p>" + outputStr + "</p>");
    }
    else if (i % 3 == 0 && i % 7 == 0) {
      outputStr += "FizzBoom"
      $("#output").append("<p>" + outputStr + "</p>");
    }
    else if (i % 5 == 0 && i % 7 == 0) {
      outputStr += "BuzzBoom"
      $("#output").append("<p>" + outputStr + "</p>");
    }
    else if (i % 3 ==0 && i % 5 == 0 && i % 7 == 0) {
      outputStr += "FizzBuzzBoom"
      $("#output").append("<p>" + outputStr + "</p>");
    }
    //individual
    else if (i % 3 == 0) {
      outputStr += "Fizz"
      $("#output").append("<p>" + outputStr + "</p>");

    }
    else if (i % 5 == 0) {
      outputStr += "Buzz"
      $("#output").append("<p>" + outputStr + "</p>");

    }
    else if (i % 7 == 0) {
      outputStr += "Boom"
      $("#output").append("<p>" + outputStr + "</p>");
    }
    
    
    else {
      outputStr += i
      $("#output").append("<p>" + outputStr + "</p>");

    }
  }
  if (outputStr) {
    outputStr = " - " + outputStr + "!"
  }
}


//button doing something to output
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var max = document.getElementById("max").value;
  var factors = fizzBuzzBoom(max);
  //newText ="<p>The Sorting Hat has sorted you into " + house + "</p>";
  outputEl.innerHTML = "";
  fizzBuzzBoom(max);
})