var randomnumber1= Math.floor(Math.random() * 6) + 1;

var randomDiceimage =  "dice" + randomnumber1 +  ".png";
var randomImgSource = "images/" + randomDiceimage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

var randomnumber2= Math.floor(Math.random() * 6) + 1;

var randomDiceimage2 = "dice" + randomnumber2 +  ".png";
var randomImgSource2 = "images/" + randomDiceimage2;
var img2= document.querySelectorAll('img')[1];
img2.setAttribute("src", randomImgSource2);

if(randomnumber1 === randomnumber2){
    document.querySelector("h1").textContent="It's a tie!";
} else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").textContent="Player 1 Wins ! ";
}else{
    document.querySelector("h1").textContent="Player 2 Wins !";
}