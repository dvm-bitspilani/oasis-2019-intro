// alert("hello");
var cardsContact = document.getElementsByClassName("des-card");

var cardDiv = document.getElementsByClassName("Cards-div")[0];

let widthParent = cardDiv.width;
let widthCards = cards[0].width;
let group=0;
let noOfCards;

let leftButtonContact = document.getElementsByClassName("arrow-left-contact")[0];
let rightButtonContact = document.getElementsByClassName("arrow-right-contact")[0];
rightButtonContact.addEventListener("click",nextContact);
leftButtonContact.addEventListener("click",backContact);
// console.log(noOfCards);

// for(var i=0 ; i < cards.length ; i++){
//     if(i > noOfCards){
//         cards[0].style.display = "none";
//     }
// }

let widthScreen = window.innerWidth;
console.log(widthScreen);

function displayAll(){
    for(var i=0 ; i < cardsContact.length ; i++){
        cardsContact[i].style.display = "flex";
    }
    group =1;
    noOfCards = 8;
}

function nextContact(){

    if(group < noOfGroups){
        group = group+1;
    }else{
        // group = 1;
    }
    for(var i=0 ; i < cardsContact.length ; i++){
        if(i >= (group-1)*noOfCards & i < ((group-1)*noOfCards + noOfCards)){
            console.log(i);
            // setTimeout(()=>{
                cardsContact[i].style.display = "flex"; 
                // cardsContact[i].style.opacity = 1;
            // },201);
            // cardsContact[i].style.transform = "scale(1.05)";    
            // setTimeout(()=>{
            // cardsContact[i].style.transform = "scale(1)";
            // },350);
        
        }else{
            // cardsContact[i].style.opacity = 0;
            // cardsContact[i].style.transform = "scale(0.5)";
            // setTimeout(()=>{
            //     cardsContact[i].style.transform = "scale(1)";
                cardsContact[i].style.display = "none";
            // },200);
        }
    }
    console.log(group);
}

function backContact(){
    
    if(group > 1){
        group = group - 1;
    }else{
        // group = 1;
    }
    for(var i=0 ; i < cardsContact.length ; i++){
        if(i >= (group-1)*noOfCards & i < ((group-1)*noOfCards + noOfCards)){
            console.log(i);
            cardsContact[i].style.display = "flex";
        }else{
            cardsContact[i].style.display = "none";
        }
    }
    console.log(group);
}

function divideToGroups(){
    if(widthScreen > 966){
        displayAll();
        noOfCards = 4;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
            }
        }
    }
    
    if(widthScreen < 700){
        displayAll();
        noOfCards = 2;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
            }
        }
    }
    
    if(widthScreen < 500){
        displayAll();
        noOfCards = 1;
        group = 1;
        noOfGroups = Math.ceil(cardsContact.length/noOfCards);
        console.log(noOfGroups);
        for(var i=0 ; i < cardsContact.length ; i++){
            if(i >= noOfCards ){
                cardsContact[i].style.display = "none";
            }
        }
    }
}

window.addEventListener("resize",()=> {
    divideToGroups();
});

divideToGroups();