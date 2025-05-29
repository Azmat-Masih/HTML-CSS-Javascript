let order = [];
let playerOrder = [];
let flash ;
let turn ;
let good ;
let compTurn;
let interValidId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#topleft');
const topRight = document.querySelector('#topright');
const bottomLeft = document.querySelector('#bottomleft');
const bottomRight = document.querySelector('#bottomright');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

// 1st EventListener
strictButton.addEventListener('click',(event)=>{
    console.log("Checked",event);
    if(strictButton.checked == true){
        strict = true;
        console.log(strict);
    }
    else{
        strict = false;
        console.log(strict);
    }
});

// 2nd Event Listener
onButton.addEventListener('click',()=>{
    if(onButton.checked == true){
        on = true;
        turnCounter.innerHTML = '-'
    }
    else{
        on = false;
        turnCounter.innerHTML = '';
        clearColor();
        clearInterval(interValidId);

    }
});

// 3rd Event Listener
startButton.addEventListener('click',(event)=>{
    if(on || win){
        play()
    }
});

// 4th Function
function play(){
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    interValidId = 0;
    turn = 1;
    turnCounter.innerHTML = 1; //mistake turn
    good = true;
    // For Loop
    for(var i = 0; i < 20; i++){
        order.push(Math.floor(Math.random()*4)+1);
    }
    compTurn = true;

    interValidId = setInterval(gameTurn, 800);
    console.log("order", order);
};

// 5th Function
function gameTurn(){
    on = false;

    if(flash == turn){
        clearInterval(interValidId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if(compTurn){
        clearColor();
        setTimeout(() => {
            if(order[flash]== 1) one();
            if(order[flash]== 2) two();
            if(order[flash]== 3) three();
            if(order[flash]== 4) four();
            flash++;
        }, 200);
    }

};


// 6th Function
function one(){
    if(noise){
        let audio = document.getElementById('clip1');
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
};


// 7th Function
function two(){
    if(noise){
        let audio = document.getElementById('clip2');
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
};

// 8th Function
function three(){
    if(noise){
        let audio = document.getElementById('clip3');
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
};


// 9th Function
function four(){
    if(noise){
        let audio = document.getElementById('clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
};


// 10th Function
function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
  };


// 11th Event Listener
topLeft.addEventListener('click',(event)=>{
    if(on){
        playerOrder.push(1);
        check();
        one();
        if(!win){
            setTimeout(()=>{
                clearColor();
            }, 300);
        }
    }
});

// 12th Event Listener
topRight.addEventListener('click',(event)=>{
    if(on){
        playerOrder.push(2);
        check();
        two();
        if(!win){
            setTimeout(()=>{
                clearColor();
            }, 300);
        }
    }
});

// 13th Event Listener
bottomLeft.addEventListener('click',(event)=>{
    if(on){
        playerOrder.push(3);
        check();
        three();
        if(!win){
            setTimeout(()=>{
                clearColor();
            }, 300);
        }
    }
});

// 14th Event Listener
bottomRight.addEventListener('click',(event)=>{
    if(on){
        playerOrder.push(4);
        check();
        four();
        if(!win){
            setTimeout(()=>{
                clearColor();
            }, 300);
        }
    }
});


// 15th Function
function flashColor(){
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";   
}

// 16th Function
function winGame(){
    flashColor();
    turnCounter.innerHTML = "WIN";
    on = false;
    win = true;
}

// 17th Function
function check(){
    if(playerOrder[playerOrder.length -1] !== order[playerOrder.length -1])
        good = false;

    if(playerOrder.length == 3 && good){
        winGame();
    }

    if(good == false){
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(()=>{
            turnCounter.innerHTML = "turn";
            clearColor();

            if(strict){
                play();
            }
            else{
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                interValidId = setInterval(gameTurn,800)
            }
        },800);

        noise = false;
    }

    if(turn == playerOrder.length && good && !win){
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        interValidId = setInterval(gameTurn,800);
    }
};