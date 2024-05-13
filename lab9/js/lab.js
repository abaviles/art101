/* 
Adam Aviles
ART 101
Lab 9: Libraries & JQuery 
Requirements: JQuery must be loaded in order for this to work.
*/ 

//adding a button via JQuery
$("#challenge").append("<button class='button-challenge'>Make Special</button");
$("#problems").append("<button class='button-problems'>Make Special</button");
$("#reflection").append("<button class='button-reflection'>Make Special</button");
$("#results").append("<button class='button-results'>Make Special</button");
//adding event listener
$(".button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$(".button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$(".button-reflection").click(function(){
    $("#reflection").toggleClass("special");
});

$(".button-results").click(function(){
    $("#results").toggleClass("special");
});