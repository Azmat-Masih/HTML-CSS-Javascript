const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click',function(){
    counter--;
    coursel();
    console.log("prevBtn");
});

nextBtn.addEventListener('click',function(){
    counter++;
    coursel();
    console.log("nextBtn");
});

function coursel(){
    slides.forEach(function(slide){
        slide.style.tranform = `translateX(-${counter * 100}%)`;
    });
};