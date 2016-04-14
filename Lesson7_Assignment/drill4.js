/*
Program name: Recipe Display Application
Author: Benjamin Felts

Date: 4/13/2016

Filename: script.js
*/


function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
}
//$("h3").click(display);
function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}

$("h3").click(display2);

$("h3").hover(function() {
    $(this).css("background-color", "yellow");
}, function() {
     $(this).css("background-color", "pink");
});

$("h3").hover(display2);