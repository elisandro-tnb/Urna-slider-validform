let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;/*Slider px fixo */

/* silder px auto
document.querySelector('.slider--width').style.width = 
     `calc(100vw * ${totalSlides})`;
*/

document.querySelector('.slider--width').style.width = 
     `calc(${sliderWidth}px * ${totalSlides})`;

document.querySelector('.slider--controls').style.height 
= `${document.querySelector('.slider').clientHeight}px`;


document.querySelector('.slider--controls').style.width 
= `${sliderWidth}px`; /* usado parao slider fixo */


function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderWidth = document.querySelector('.slider').clientWidth;
    let newMargin = (currentSlide * sliderWidth); 
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 4000);

/* debug */
console.log('Total Slides '+totalSlides);
console.log('Largura Slides '+sliderWidth);
/*  fim debug */ 