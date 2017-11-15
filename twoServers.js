var http = require('http');

var NICEPORT = 7000;
var MEANPORT = 7500;

function kindRequest(request, response){
    let num = Math.floor(Math.random()*5);
    
        if(num === 0){
            response.end("You have a beautiful smile.");
        } else if (num === 1) {
            response.end("Your farts smell like roses.");
        } else if (num === 2) {
            response.end("The back of your head is ridiculous.");
        } else if (num === 3) {
            response.end("You literally CAN even.");
        } else {
            response.end("You're alright I guess.");
        }
    
}
function rudeRequest(request, response){
    let num = Math.floor(Math.random()*5);
    
        if(num === 0){
            response.end("You have an ugly laugh.");
        } else if (num === 1) {
            response.end("You should smile a lot less. It makes the rest of us uncomfortable.");
        } else if (num === 2) {
            response.end("People talk about you behind your back. Like, in a bad way.");
        } else if (num === 3) {
            response.end("Nah, too easy of a target.");
        } else {
            response.end("You're SO brave for wearing that.");
        }
}


var niceServer = http.createServer(kindRequest);
var rudeServer = http.createServer(rudeRequest);

niceServer.listen(NICEPORT, function(){
    console.log('Serving a response from the kind server');
});

rudeServer.listen(MEANPORT, function(){
    console.log('Serving a response from the rude server');
});