/* 
Adam Aviles
ART 101
Lab 13: Loops
Requirements: JQuery must be loaded in order for this to work.
*/ 


URL =   "https://pokeapi.co/api/v2/evolution-chain/7/"
//URL =  "https://api.whatdoestrumpthink.com/api/v1/quotes/random"


// attach click action to button
$('#play').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajxax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // The data to send (will be converted to a query string)
        // data: { api_key: RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry},
        // Whether this is a POST or GET request
        type: "GET",
        id: 7,
        baby_trigger_item:null,
        is_baby:false,
        name:"rattata",
        url:"https://pokeapi.co/api/v2/pokemon-species/19/",
        evolution_details:null,
        is_baby:false,
        name:"raticate",
        url:"https://pokeapi.co/api/v2/pokemon-species/20/",  
        // The type of data we expect back
        // dataType : "json",*/
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // make our JSON data printable
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        // put data in webpage
        $("#output").append("<p>" + JSON.stringify(data));
        // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
        //$("#output").append(printableData);
        // $("#output").append("<p>The most stable smart man in the room says: <b>" + data.quote);
        $("#title").html(data.title)
        //$("#output").append("<img src=" + data.url + ">");
       // $("#output").append("<p>" + data.explanation);

    })
});