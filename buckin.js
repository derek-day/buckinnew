
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-div");
  let homeslide1 = document.getElementsByClassName("home1");
  let homeslide2 = document.getElementsByClassName("home2");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 12000);
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


// Interstitial
var velocity = 0.5;

function inter(){ 
    var pos = $(window).scrollTop(); 
    $('.inter-back1').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        // var height = $element.height()-18;
        var height = $element.height()*2.25;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

function intermobile(){ 
  var pos = $(window).scrollTop(); 
  $('.inter-back-mob').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      // var height = $element.height()-18;
      var height = $element.height()*3.5;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
  }); 
};

function inter2(){ 
  var pos = $(window).scrollTop(); 
  $('.inter-back2').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      // var height = $element.height()-18;
      var height = $element.height()*2;
      $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
  }); 
};

function inter3(){ 
  var pos = $(window).scrollTop(); 
  $('.inter-back3').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      // var height = $element.height()-18;
      var height = $element.height()*1.75;
      $(this).css('backgroundPosition', '50% ' + Math.round((height + pos) * velocity) + 'px'); 
  }); 
};

function menuback(){ 
  var pos = $(window).scrollTop(); 
  $('.menu-back').each(function() { 
      var $element = $(this);
      // subtract some from the height b/c of the padding
      // var height = $element.height()-18;
      var height = $element.height();
      $(this).css('backgroundPosition', '50% ' + Math.round((height + pos) * velocity) + 'px'); 
  }); 
};


$(window).bind('scroll', inter);
$(window).bind('scroll', intermobile);
$(window).bind('scroll', inter2);
$(window).bind('scroll', inter3);
$(window).bind('scroll', menuback);

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

// Cooler slides
const coolerSlides = document.querySelectorAll(".cooler-slide");

coolerSlides.forEach((coolerSlide, coolerIndx) => {
    coolerSlide.style.transform = `translateX(${coolerIndx * 100}%)`;
});

const coolerNextSlide = document.querySelector(".cooler-btn-next");

let coolerCurSlide = 0;
let coolerMaxSlide = coolerSlides.length - 1;

coolerNextSlide.addEventListener("click", function () {
  if (coolerCurSlide === coolerMaxSlide) {
    coolerCurSlide = 0;
  } else {
    coolerCurSlide++;
  }
  coolerSlides.forEach((coolerSlide, coolerIndx) => {
    coolerSlide.style.transform = `translateX(${100 * (coolerIndx - coolerCurSlide)}%)`;
  });
});

const coolerPrevSlide = document.querySelector(".cooler-btn-prev");

coolerPrevSlide.addEventListener("click", function () {
  if (coolerCurSlide === 0) {
    coolerCurSlide = coolerMaxSlide;
  } else {
    coolerCurSlide--;
  }

  coolerSlides.forEach((coolerSlide, coolerIndx) => {
    coolerSlide.style.transform = `translateX(${100 * (coolerIndx - coolerCurSlide)}%)`;
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

