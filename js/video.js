var screenWidth = window.innerWidth;
var cards = document.getElementsByClassName("cards");
console.log(screenWidth);

window.addEventListener("resize",()=> {
    screenWidth = window.innerWidth;
   
});

if(screenWidth < 700){
    console.log("dssds");
    for(let i=1 ; i < cards.length ; i++){
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