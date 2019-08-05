// 'use strict';
var screenWidth = window.innerWidth;
var cards = document.getElementsByClassName("cards");
var currentCard = 1;
var numberOfCards = cards.length;

window.addEventListener("resize",()=> {
    // screenWidth = window.innerWidth;
    currentCard = 1;
    if(screenWidth < 700){
        // console.log(cards);
        for(let i=1 ; i < cards.length ; i++){
            console.log(i);
            cards[i].style.display = "none";
        }
        cards[0].style.display = "grid";
    }else{
        console.log("dssds");
        for(var i=0; i< cards.length ; i++){
            cards[i].style.display = "grid";
        }
    }   
});

if(screenWidth < 700){
    // console.log(cards);
    currentCard = 1;    
    for(let i=1 ; i < cards.length ; i++){
        console.log(i);
        cards[i].style.display = "none";
    }
    cards[currentCard-1].style.display = "grid";
}else{
    console.log("dssds");
    for(var i=0; i< cards.length ; i++){
        cards[i].style.display = "grid";
    }
} 

var leftButton = document.getElementsByClassName("arrow-left")[0];
var rightButton = document.getElementsByClassName("arrow-right")[0];
rightButton.addEventListener("click",next);
leftButton.addEventListener("click",back);


function next(){
    currentCard = currentCard+1;
    if(currentCard > numberOfCards){
        currentCard = 1;
    }
    for(let i=0 ; i < cards.length ; i++){
        console.log(i);
        cards[i].style.display = "none";
    }
    cards[currentCard-1].style.display = "grid";
}

function back(){
    currentCard = currentCard-1;
    if(currentCard == 0){
        currentCard = cards.length;
    }
    for(let i=0 ; i < cards.length ; i++){
        console.log(i);
        cards[i].style.display = "none";
    }
    cards[currentCard-1].style.display = "grid";
}




