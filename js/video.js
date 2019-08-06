var screenWidth = window.innerWidth;
var cards = document.getElementsByClassName("cards");
var currentCard = 1;
var numberOfCards = cards.length;

window.addEventListener("resize",()=> {
    screenWidth = window.innerWidth;
    currentCard = 1;
    if(screenWidth < 700){
        // console.log(cards);
        for(let i=1 ; i < cards.length ; i++){
            console.log(i);
            cards[i].style.opacity = 0;
        }
        // cards[0].style.display = "grid";
    }else{
        console.log("dssds");
        for(var i=0; i< cards.length ; i++){
            // cards[i].style.display = "grid";
            cards[i].style.opacity = 1;
        }
    }   
});

if(screenWidth < 700){
    // console.log(cards);
    currentCard = 1;    
    for(let i=1 ; i < cards.length ; i++){
        // console.log(i);
        // cards[i].style.display = "none";
        cards[i].style.opacity = 0;
    }
    cards[currentCard-1].style.display = "grid";
}else{
    // console.log("dssds");
    for(var i=0; i< cards.length ; i++){
        // cards[i].style.display = "grid";
        cards[i].style.opacity = 1;
 
    }

} 

var leftButton = document.getElementsByClassName("arrow-left")[0];
var rightButton = document.getElementsByClassName("arrow-right")[0];
rightButton.addEventListener("click",next);
leftButton.addEventListener("click",back);


function next(){
    cards[currentCard-1 ].style.transform = "scale(0.5)";
    currentCard = currentCard+1;
    if(currentCard > numberOfCards){
        currentCard = 1;
    }
    for(let i=0 ; i < cards.length ; i++){
        console.log(i);
        // cards[i].style.display = "none";
        cards[i].style.opacity = 0;
       
    }
    cards[currentCard-1].style.opacity = 1;
        cards[currentCard-1].style.transform = "scale(1.05)";
        // cards[currentCard-1].style.transition = "0.25s";
    setTimeout(()=>{
        cards[currentCard-1].style.transform = "scale(1)";
    },350);

}

function back(){
    cards[currentCard-1 ].style.transform = "scale(0.5)";

    currentCard = currentCard-1;
    if(currentCard == 0){
        currentCard = cards.length;
    }
    for(let i=0 ; i < cards.length ; i++){
        console.log(i);
        // cards[i].style.display = "none";
        cards[i].style.opacity = 0;
    }
    cards[currentCard-1].style.opacity = 1;
    cards[currentCard-1].style.transform = "scale(1.05)";
    setTimeout(()=>{
        cards[currentCard-1].style.transform = "scale(1)";
    },350);

}
window.addEventListener("keydown", keyMove);

function keyMove(){
    if (window.event.key == "s" || window.event.key == "a" || window.event.key == "ArrowDown" || window.event.key == "ArrowLeft"){
       back();
    } else if(window.event.key == " " || window.event.key == "w" || window.event.key == "d" || window.event.key == "ArrowUp" || window.event.key == "ArrowRight"){
       next();
    }
}


var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      next();
    } else {
      // swiped right
      back();
    }  
  } 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
  
};

document.getElementsByClassName("video-wrapper")[0].addEventListener("touchstart", startTouch, false);
document.getElementsByClassName("video-wrapper")[0].addEventListener("touchmove", moveTouch, false);