// window.onscroll = changePos;

// function changePos() {
//     var header = document.getElementById("header");

//     if (window.scrollY > 40) {
//         header.style.position = "relative";
//         header.style.top = (scrollY - 40) + "px";
//     } else {
//         header.style.position = "";
//         header.style.top = "";
//     }
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-div");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "grid";  
  // setTimeout(showSlides, 6500);
  setTimeout(showSlides, 8000);

}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Drink slides
const drinkSlides = document.querySelectorAll(".drink-slide");

drinkSlides.forEach((drinkSlide, drinkIndx) => {
    drinkSlide.style.transform = `translateX(${drinkIndx * 100}%)`;
});

const drinkNextSlide = document.querySelector(".drink-btn-next");

let drinkCurSlide = 0;
let drinkMaxSlide = drinkSlides.length - 1;

drinkNextSlide.addEventListener("click", function () {
  if (drinkCurSlide === drinkMaxSlide) {
    drinkCurSlide = 0;
  } else {
    drinkCurSlide++;
  }
  drinkSlides.forEach((drinkSlide, drinkIndx) => {
    drinkSlide.style.transform = `translateX(${100 * (drinkIndx - drinkCurSlide)}%)`;
  });
});

const drinkPrevSlide = document.querySelector(".drink-btn-prev");

drinkPrevSlide.addEventListener("click", function () {
  if (drinkCurSlide === 0) {
    drinkCurSlide = drinkMaxSlide;
  } else {
    drinkCurSlide--;
  }

  drinkSlides.forEach((drinkSlide, drinkIndx) => {
    drinkSlide.style.transform = `translateX(${100 * (drinkIndx - drinkCurSlide)}%)`;
  });
});

// Tumbler slides
const tumblerSlides = document.querySelectorAll(".tumbler-slide");

tumblerSlides.forEach((tumblerSlide, tumblerIndx) => {
  tumblerSlide.style.transform = `translateX(${tumblerIndx * 100}%)`;
});

const tumblerNextSlide = document.querySelector(".tumbler-btn-next");

let tumblerCurSlide = 0;
let tumblerMaxSlide = tumblerSlides.length - 1;

tumblerNextSlide.addEventListener("click", function () {
  if (tumblerCurSlide === tumblerMaxSlide) {
    tumblerCurSlide = 0;
  } else {
    tumblerCurSlide++;
  }
  tumblerSlides.forEach((tumblerSlide, tumblerIndx) => {
    tumblerSlide.style.transform = `translateX(${100 * (tumblerIndx - tumblerCurSlide)}%)`;
  });
});

const tumblerPrevSlide = document.querySelector(".tumbler-btn-prev");

tumblerPrevSlide.addEventListener("click", function () {
  if (tumblerCurSlide === 0) {
    tumblerCurSlide = tumblerMaxSlide;
  } else {
    tumblerCurSlide--;
  }

  tumblerSlides.forEach((tumblerSlide, tumblerIndx) => {
    tumblerSlide.style.transform = `translateX(${100 * (tumblerIndx - tumblerCurSlide)}%)`;
  });
});

