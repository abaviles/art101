/* 
Adam Aviles
ART 101
Lab 9: Libraries & JQuery 
Requirements: JQuery must be loaded in order for this to work.
*/ 

function generateRandomText() {
    const text = "Imagine looking up from your phone while driving.";
    const min = 3
    const max = 100
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1))
    return text.slice(randStart, randStart + randLen)
}

$("#make-convo").click(function(){
    const newText = generateRandomText()
    $("#output").append('<div class="text"><p>' + newText + '</p></div>')
})


