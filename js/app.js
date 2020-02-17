`use strict`
alert("Let's get to know each other.");
var yourName = prompt("what's your name?");
var myNationality = prompt(" my nationality is syrian?", "yes, no , y, n");
switch (myNationality.toLowerCase()) {
    case myNationality = "yes":
    case myNationality = "y":
        alert("you are write!");
        break;
    case myNationality = "n":
    case myNationality = "no":
        alert("wrong answer!");
        break
    default:
        alert("please type the answer!");
}
var myAge = prompt("Am I 35 years old?", "yes, no , y, n");
switch (myAge.toLowerCase()) {
    case myAge = "no":
    case myAge = "n":
        alert("you are write!");
        break;
    case myAge = "yes":
    case myAge = "y":
        alert("wrong answer!");
        break;
    default:
        alert("please type the answer!");
}
var myGrads = prompt("my job is football player?", "yes, no , y, n");
switch (myGrads.toLowerCase()) {
    case myGrads = "no":
    case myGrads = "n":
        alert("you are write!");
        break;
    case myGrads = "y":
    case myGrads = "yes":
        alert("wrong answer!");
        break;
    default:
        alert("please type the answer!");
}
var myClub = prompt("my fav club is barcelona?", "yes, no , y, n");
switch (myClub.toLowerCase()) {
    case myClub = "yes":
    case myClub = "y":
        alert("you are write!");
        break;
    case myClub = "n":
    case myClub = "no":
        alert("wrong answer");
        break;
    default:
        alert("please type the answer!");
}
var favFilm = prompt("my fav film is Batman?", "yes, no , y, n");
switch (favFilm.toLowerCase()) {
    case favFilm = "no":
    case favFilm = "n":
        alert("you are write!");
        break;
    case favFilm = "y":
    case favFilm = "yes":
        alert("wrong answer!");
        break;

    default:
        alert("please type the answer!");
}
var yourName ;
alert("good job and welcome ^-^ " + yourName);