// *** TOPICS COVER *** //

// - document.querySelector()
// - textContent
// - forEach
// - addEventListener
// - setInterval
// - classList.add

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('#mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timeId = null;

// 1 function
function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randSquare = squares[Math.floor(Math.random()* 9)];
    randSquare.classList.add('mole');

    hitPosition = randSquare.id;
    console.log(randSquare);

}
// randomSquare();


// 3rd Event Listener (3rd Step)
squares.forEach(square => {
    square.addEventListener('mousedown',()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

// 2nd Function
function moveMole(){
    timeId = setInterval(randomSquare, 500)
}

moveMole();


// 4th Function (4th Step)
function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimeId);
        clearInterval(timeId);
        alert("Game Over! Your Score" + result);
    }
};

let countDownTimeId = setInterval(countDown,1000); // 1 second

