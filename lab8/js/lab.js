/* 
Adam Aviles
ART 101
Lab 8: Anon Functions & Callback 
*/ 

var numArray = [1, 509, 67, 30];

function doubleTime(x) {
    return x * 2
};

//funciton tests
console.log(doubleTime(9));
console.log(doubleTime(52));

//every index in array
numArray.map(doubleTime);

//one-time function
numArray.map(function(x){
    var results = x / 4
    return results;
})

//Results
var mapResults = numArray.map(doubleTime);
console.log("Results: ", mapResults)


