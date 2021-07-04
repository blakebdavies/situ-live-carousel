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

    carouselPhoto.addEventListener("transitionend", () => {
        carouselPhoto.classList.remove("top");
    })
})
}
getPosition();

buttons.forEach(button =>{
    button.addEventListener("click", ()=> {
        if(button.classList.contains("next")) getNextSlide()
        else if(button.classList.contains("prev")) getPrevSlide();
    })
})

function getNextSlide(){
const current =document.querySelector(".carouselPhoto.active");
const [next, prev] = getNextPrev();

current.classList.add("top");
next.classList.add("top");

current.classList.remove("active");
current.style.transform= "translate(-100%)";
next.classList.add("active");
next.style.transform = "translate(0)";

}
function getPrevSlide(){
    console.log("getting Prev Slide");

}