window.onload = function() {
  let loader = document.getElementsByClassName("loader")[0];
  let about = document.getElementsByClassName("about")[0];
  let landingWrapper = document.getElementsByClassName("landing-wrapper")[0];
  let navigation = document.getElementsByClassName("navigation")[0];
  let register = document.getElementsByClassName("mobile-register")[0];
  landingWrapper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
  about.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
  navigation.style.transition = "ease-out 0.5s"; // fade-in effect for content on loading
  register.style.transition = "opacity ease-out 0.5s";
  document.getElementById('hamburger').style.transition = "opacity ease-out 0.5s";
  document.getElementsByClassName('mobile-register')[0].style.transition = "opacity ease-out 0.5s";
  setTimeout(() => {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    loader.style.display = "none";
    document.getElementsByClassName("bottom-div")[0].style.opacity = "1";
    landingWrapper.style.opacity = 1;
    about.style.opacity = 1;
    navigation.style.opacity = 1;
    register.style.opacity = 1;
    document.getElementById('hamburger').style.opacity = 1
    document.getElementsByClassName('mobile-register')[0].style.opacity = 1;
    // document.getElementsByClassName("nav-bar")[0].style.display = "flex";
    // document.getElementsByClassName("sidebar")[0].style.display = "flex";
    // if (window.innerWidth > 500)
    //   document.getElementsByClassName("navigator")[0].style.display = "flex";
    // if (window.innerWidth < 500) {
    //   document.getElementsByClassName("navigator")[0].style.display = "none";
    // }
  }, 4500);
};

let hue = 0;
setInterval(() => {
  if (hue < 360) hue += 30;
  else hue = 0;

  document.getElementsByClassName("landing-wrapper")[0].style.transition = "1s";
  document.querySelectorAll(".landing-wrapper:not(.navigation)")[0].style.filter =
    "hue-rotate(" + hue + "deg)";
}, 5000);

var nav = document.getElementsByClassName("navigation")[0];
var isNavOpen = false;
function toogleNav() {
  if (!isNavOpen) {
    isNavOpen = true;
    openNav();
    document.querySelectorAll("#hamburger > div")[0].style.transform =
      "rotate(45deg)";
    document.querySelectorAll("#hamburger > div")[2].style.transform =
      "rotate(-45deg)";
    document.querySelectorAll("#hamburger > div")[1].style.opacity = "0";
    document.getElementsByTagName('body')[0].style.height = '100vh';
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  } else {
    isNavOpen = false;
    closeNav();
    document.querySelectorAll("#hamburger > div")[0].style.transform =
      "rotate(0deg)";
    document.querySelectorAll("#hamburger > div")[2].style.transform =
      "rotate(0deg)";
    document.querySelectorAll("#hamburger > div")[1].style.opacity = "1";
    document.getElementsByTagName('body')[0].style.height = 'initial';
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  }
}

function openNav() {
  nav.style.transform = "translateX(0)";
}
function closeNav() {
  nav.style.transform = "translateX(-100vw)";
}

var profpic = [
  "chandak.png",
  "Parth.jpg",
  "adit.png",
  "DVM.png",
  "pawar.jpg",
  "tanvi.png",
  "pawar.jpg",
  "tanvi.png"
];

var url = "images/";

for (var i = 0; i < document.getElementsByClassName("prof-pic").length; i++) {
  document.getElementsByClassName("prof-pic")[i].src = url + profpic[i];
}

window.onbeforeunload = function() {
  alert('reload')
  window.scrollTo(0,0);
}