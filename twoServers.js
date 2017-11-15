var http = require('http');

var NICEPORT = 7000;
var MEANPORT = 7500;

function kindRequest(request, response){
    response.end('Serving a response from the kind server');
}
function rudeRequest(request, response){
    response.end('Serving a response from the rude server');
}


var niceServer = http.createServer(kindRequest);
var rudeServer = http.createServer(rudeRequest);

niceServer.listen(NICEPORT, function(){
    let num = Math.floor(Math.random()*5);

    if(num === 0){
        console.log("You have a beautiful smile.");
    } else if (num === 1) {
        console.log("Your farts smell like roses.");
    } else if (num === 2) {
        console.log("The back of your head is ridiculous.");
    } else if (num === 3) {
        console.log("You literally CAN even.");
    } else {
        console.log("You're alright I guess.");
    }
});

rudeServer.listen(MEANPORT, function(){
    let num = Math.floor(Math.random()*5);

    if(num === 0){
        console.log("You have an ugly laugh.");
    } else if (num === 1) {
        console.log("You should smile a lot less. It makes the rest of us uncomfortable.");
    } else if (num === 2) {
        console.log("People talk about you behind your back. Like, in a bad way.");
    } else if (num === 3) {
        console.log("Nah, too easy of a target.");
    } else {
        console.log("You're SO brave for wearing that.");
    }
});