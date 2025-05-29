const fixedColors = ['red', 'blue', '#ff91ff', 'green', 'grey', 'brown', "rgba(255,255,234, .8)","rgba(132, 150, 163)","#b4f53b"]


const btn = document.getElementById('btn');
const colors = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();

    console.log(randomNumber);

    document.body.style.backgroundColor = fixedColors[randomNumber];
    colors.textContent = fixedColors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() *fixedColors.length);
}