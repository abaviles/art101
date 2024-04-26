// index.js - purpose and description here
// Author: Adam Aviles
// Date: April 25, 2024

//Define Variables
let myTransport = ["Ford Focus", "walking", "carpooling with friends", "Lime Scooter"];

//Object for Car
var myMainRide = {
  make: "Ford",
  model: "Focus",
  color: "blue",
  year: 1995,
  age: function() {
      return 2024 - this.year;
  }
}

//output
document.writeln("I tend to do/use these for transportation: ", myTransport, "</br>");
document.writeln("My Main Whip: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
