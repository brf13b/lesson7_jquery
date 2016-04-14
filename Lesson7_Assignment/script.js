/*
Program name: Recipe Display Application
Author: Benjamin Felts

Date: 4/13/2016

Filename: script.js
*/


function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
}




$("h3").click(display);



