var randomNumber1 = Math.floor(Math.random()*6)+1;
var FakeSrc = "./images/dice"+randomNumber1+".png";
var imageDice1 = document.querySelectorAll("img")[0];
imageDice1.setAttribute("src",FakeSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var FakeSrc2 = "./images/dice"+randomNumber2+".png";
var imageDice2 = document.querySelectorAll("img")[1];
imageDice2.setAttribute("src",FakeSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else {
    document.querySelector("h1").innerHTML = "Draw! Try again";
}