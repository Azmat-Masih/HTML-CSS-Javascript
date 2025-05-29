
let userScore = 0 ;
let compScore = 0;


// Declaring Variables //
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const yourS = document.getElementById("your-score");
const compS = document.getElementById("computer-score");



// *** Function Show Winner *** //

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win!");
        userScore ++;
        yourS.innerText = userScore; 
        msg.innerHTML = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose.");
        compScore ++;
        compS.innerText =compScore;
        msg.innerHTML = `You Lose, Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}




// *** Function Play Game *** //

const playGame = (userChoice) => {
    // console.log("Computer Choice");
    const compChoice =  compGenChoice();
    console.log("Computer Choice", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        // Scissors, Paper
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // Scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // Rock, Paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }

};


// *** Function Computer Generated Choices *** //

const compGenChoice = () => {
    // Rock , Paper, Scissors
    const options = ["rock", "paper", "scissors"];
    const randIDx = Math.floor(Math.random() * 3);
    // console.log("randNum", randIDx);
    return options[randIDx];
};


// *** Function Draw Game *** //

const drawGame = () =>{
    console.log("Draw Game");
    msg.innerHTML = "Game Draw !!!";
    msg.style.backgroundColor = "black";
}



// *** Add Event Listener *** // Choice

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("Your choice",userChoice);
        playGame(userChoice);
    });
});
