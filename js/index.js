window.onload = function() {  
    let loader = document.getElementsByClassName("loader")[0];
    let about = document.getElementsByClassName("about")[0];
    let landingWrapper = document.getElementsByClassName("landing-wrapper")[0];
    landingWrapper.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
    about.style.transition = "opacity ease-out 0.5s"; // fade-in effect for content on loading
  
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
      loader.style.display="none";
      landingWrapper.style.opacity = 1;
      about.style.opacity = 1;
      // document.getElementsByClassName("nav-bar")[0].style.display = "flex";
      // document.getElementsByClassName("sidebar")[0].style.display = "flex";
      // if (window.innerWidth > 500)
      //   document.getElementsByClassName("navigator")[0].style.display = "flex";
      // if (window.innerWidth < 500) {
      //   document.getElementsByClassName("navigator")[0].style.display = "none";
      // }
    }, 4500);
};