`use strict`
alert("Let's get to know each other.");
var yourName = prompt("what's your name?");
alert('welcome ' + yourName);
var score = 0;
var myNationality = prompt(" my nationality is syrian?", "yes, no , y, n");
switch (myNationality.toLowerCase()) {
    case myNationality = "yes":
    case myNationality = "y":
        alert("you are write!");
        score = score + 1;
        break;
    case myNationality = "n":
    case myNationality = "no":
        alert("wrong answer!");
        score = score + 1;
        break
    default:
        alert("please type the answer!");
}
var myAge = prompt("Am I 35 years old?", "yes, no , y, n");
switch (myAge.toLowerCase()) {
    case myAge = "no":
    case myAge = "n":
        alert("you are write!");
        score = score + 1;
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
        score = score + 1;
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
        score = score + 1;
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
        score = score + 1;
        break;
    case favFilm = "y":
    case favFilm = "yes":
        alert("wrong answer!");
        break;

    default:
        alert("please type the answer!");
}
var numLang = Number(prompt('who many language I talk? 1, 2, 3, or 4'))
var guessNum = 0;

if (numLang == 3) {
    alert("you are write! good jooob dude. we have one more qatstion left!");
    score = score + 1;
} else {
    alert("wrong! try again");
    for (guessNum; guessNum < 3; guessNum++) {
        numLang = prompt('who many language I talk? 1, 2, 3, or 4');
        if (numLang > 3) {
            alert("too high");
        } else if (numLang < 3) {
            alert("too low");
        } else {
            alert("you are write! good jooob dude. we have one more qatstion left!");
            score = score + 1;
            break;
        }

    }
}


var newGus = 0;
var myChar = ['batman', 'superman', 'joker', 'harley', 'darkside', 'flash'];
loop: {
    for (newGus; newGus < myChar.length; newGus++) {
        var plyerGus = prompt('What\'s my fav DC characters?');
        switch (plyerGus.toLowerCase()) {
            case myChar[0]:
            case myChar[1]:
            case myChar[2]:
            case myChar[3]:
            case myChar[4]:
            case myChar[5]:
                alert("you are amazing! really " + plyerGus + " is on of my fav. goooood job");
                score = score + 1;
                break loop;
            default:
                alert("wrong!! try again!");
                break;
        }
    }
}
alert("the correct answers 6th and 7th quastions is " + '3 for the 6th and ' + myChar + " for the 7th");
alert('your score is ' + score + 'of 7' + " thank you for your time");