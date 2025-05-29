document.addEventListener('DOMContentLoaded',()=>{
    const bird = document.querySelector('.bird');
    const sky = document.querySelector('.sky');
    const ground = document.querySelector('.ground-moving');
    const gameDisplay = document.querySelector('.game-container');
    // const textD = document.querySelector('.text');


    let birdLeft = 220 ;
    let birdBottom =  100;
    let gravity = 2 ;
    let isGameOver = false;
    let gap = 430;
    let text = "Game Over";

    // First Function
    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }

    let gameTimerId = setInterval(startGame,20);



    // 2nd Function
    function jump(){
        if(birdBottom < 500)
        birdBottom += 50;
        bird.style.bottom = birdBottom + 'px';
        console.log("bird Bottom" , birdBottom);
    }

    document.addEventListener('keyup',control);

    // 3rd Function
    function control(e){
        if(e.keyCode === 32){ // code 32 is for space bar //
            jump()
        }
    }

    // 4th Function
    function generateObstacle(){
        let obstacleLeft = 500;
        // let obstacleBottom = 150;
        let obstacleHeight = Math.random() * 60;
        let obstacleBottom = obstacleHeight

        const obstacle = document.createElement('div');
        const topObstacle = document.createElement('div');

            if(!isGameOver) {
                obstacle.classList.add('obstacle');
                topObstacle.classList.add('topObstacle')
            }

            gameDisplay.appendChild(obstacle);
            gameDisplay.appendChild(topObstacle);

            obstacle.style.left = obstacleLeft + 'px';
            // obstacle.style.bottom = obseBotaclttom + 'px';
            topObstacle.style.left = obstacleLeft + 'px';

            obstacle.style.bottom = obstacleBottom+ 'px';
            topObstacle.style.bottom = obstacleBottom + gap + 'px';


            // 5th Function
            function moveObstacle(){
                obstacleLeft -= 2;
                obstacle.style.left = obstacleLeft + 'px';
                topObstacle.style.left = obstacleLeft + 'px';


                if(obstacleLeft === -60){
                    clearInterval(timeId);
                    gameDisplay.removeChild(obstacle);
                    gameDisplay.removeChild(topObstacle);
                }
                if( obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                    (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 200)||
                    birdBottom === 0){
                    
                    gameOver();
                    clearInterval(timeId);
                }

            }
            let timeId =setInterval(moveObstacle,20);
            
            if(!isGameOver) setTimeout(generateObstacle,3000);
    }

    generateObstacle();

    // 6th Function
    function gameOver(){
        clearInterval(gameTimerId);
        isGameOver = true;
        console.log("game over")
        
        ground.classList.add('ground');
        ground.classList.remove('ground-moving');

        document.removeEventListener('keyup',control);
    }
    
})