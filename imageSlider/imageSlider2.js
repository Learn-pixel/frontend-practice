const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId  = null;

//waits for the DOM content to be loaded first
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    //to get the first image when we call this function
    if(slides.length >0){
        //to make sure there are slides in the node  list
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    
}
function slideShow(index){
    //to move to the next slide...index has the slide number

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");//if we dont use the for each method then the slide just appears one by one without removing the prev pic
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    slideShow(slideIndex);
    console.log(intervalId);
}
function nextSlide(){
    //increase the slide index and then call slideShow function to ensure that the slide show happens
     slideIndex++;
     slideShow(slideIndex);
     console.log(intervalId);
}
