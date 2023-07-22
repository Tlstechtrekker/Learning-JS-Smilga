const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// put slides into horizontal string
slides.forEach(function(slide,index) {
    slide.style.left = `${index * 100}%`
});

// default counter
let counter = 0;

// add event listeners to buttons
nextBtn.addEventListener("click", function (){
    counter++;
    //alert(`counter is ${counter}`);
    carousel();
});

prevBtn.addEventListener("click", function (){
    counter--;
    carousel();
});

// set up function to change slides
function carousel(){
    /* // method 1: working with slides 
    // return to beginning
    if (counter === slides.length) {
        counter = 0;
    };
    // go to last slide
    if (counter < 0) {
        counter = slides.length - 1;
    } */

    // method 2: working with buttons
    if (counter < slides.length -1) {
        // all except last slide
        nextBtn.style.display = "block";
    } else {
        // last slide
        nextBtn.style.display = "none";
    }

    if (counter > 0) {
        // all except first slide
        prevBtn.style.display = "block";
    } else {
        // first slide
        prevBtn.style.display = "none";
    }

    //animate slide to move left
    slides.forEach(function(slide){
        // write css to write inline move left animation
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// set up default view of prev button
prevBtn.style.display = "none";