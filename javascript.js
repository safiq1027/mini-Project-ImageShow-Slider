const totalSlides=document.querySelectorAll(".imageSlider-element");

let countElement=1;

setInterval(()=>{
    countElement++;
    let  currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElement > totalSlides.length){
        totalSlides[0].classList.add("current");
        countElement=1;
    }
    else{
        currentElement.nextElementSibling.classList.add("current")
    }


},2000)