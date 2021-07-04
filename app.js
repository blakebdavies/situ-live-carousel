const slides = Array.from(document.querySelectorAll(".carouselPhoto"));
const carousel = document.querySelectorAll(".carousel");
const buttons = document.querySelectorAll(".buttons div");

function getNextPrev(){
    const activeSlide =document.querySelector(".carouselPhoto.active");
    const activeIndex= slides.indexOf(activeSlide);
    let next,prev;
    if(activeIndex === slides.length-1){
        next = slides[0]
    } else{
    next = slides[activeIndex+1];
    }
    if (activeIndex===0){
        prev = slides[slides.length-1];
    } else{
    prev = slides[activeIndex-1];
    }

    return[next,prev]
}
function getPosition(){
const activeSlide =document.querySelector(".carouselPhoto.active");
const activeIndex= slides.indexOf(activeSlide);   
const[next,prev] = getNextPrev();

slides.forEach((carouselPhoto, index)=>{
    if(index === activeIndex){
        carouselPhoto.style.transform = "translateX(0)";
    } else if(carouselPhoto === prev){
        carouselPhoto.style.transform = "translateX(-100%)";
    } else if(carouselPhoto === next){
    carouselPhoto.style.transform = "translateX(100%)";
    } else {
        carouselPhoto.style.transform ="translate(100%)";
    }
})
}
getPosition();

