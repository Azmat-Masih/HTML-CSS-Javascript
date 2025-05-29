 let boxBtn = document.querySelectorAll("box");
let resetBtn = document.querySelector("resetBtn");



boxBtn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("working");
        
    })
});

resetBtn.addEventListener("click",()=>{
    console.log("resetBtn");
})