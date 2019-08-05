'use strict';
var screenWidth = window.innerWidth;
let cards = document.getElementsByClassName("cards");
console.log(screenWidth);

window.addEventListener("resize",()=> {
    screenWidth = window.innerWidth;
   
});

if(screenWidth < 700){
    console.log("dssds");
    let cards = document.getElementsByClassName("cards");
    console.log(cards);
    for(let i=1 ; i < cards.length ; ++i){
        console.log(i);
        cards[i].style.display="none";
    }

}else{
    console.log("dssds");
    for(var i=0; i< cards.length ; i++){
        cards[i].style.display = "grid";
        console.log(i);
    }
}   