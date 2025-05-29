document.addEventListener('DOMContentLoaded',()=>{

    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');

    let doodlerLeftSpace = 50;
    let startingPoint = 150
    // let doodlerBottomSpace = 150;
    let doodlerBottomSpace = startingPoint;
    let doodlerCondition = false;
    let platformCount = 5;
    let platforms = [];
    let upTimerID ;
    let downTimerID;
    let isJumping = true;
    let leftTimerId;
    let rightTimerId;
    let isMovingLeft = false;
    let isMovingRight = false;
    let isGameOver = false;
    let score = 0;
    let speed = 3;
    const gravity = 0.9;


    function createDoodler(){
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodlerLeftSpace = platforms[0].left;

        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }



    class Platform{
        constructor(newPlatBottom){
            this.bottom = newPlatBottom;
            this.left = Math.random() * 315;
            this.bottom = newPlatBottom;

            this.visual = document.createElement('div');
            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual);
        }
    }

    function createPlatforms(){
        for(let i = 0; i < platformCount; i++){
            let platformGap = 600 / platformCount;
            let newPlatBottom = 100 + i * platformGap;
            let newPlatform = new Platform (newPlatBottom);
        
            platforms.push(newPlatform);
            console.log("platforms", platforms);
        }
    };


    function movePlatforms(){
        if(doodlerBottomSpace > 200){
            platforms.forEach(platform=>{
                platform.bottom -=4;

                let visual = platform.visual;
                visual.style.bottom = platform.bottom + 'px';

                if(platform.bottom < 10){
                    let firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove('platform');
                    platforms.shift();
                    score++; // increasing scores //

                    console.log('platforms',platforms);
                    
                    var newPlatform = new Platform(600);
                    platforms.push(newPlatform);
                }
            })
        };
    };


    function jump(){
        clearInterval(downTimerID);
        isJumping = true;
        upTimerID = setInterval(function(){
            doodlerBottomSpace += 20;
            doodler.style.bottom = doodlerBottomSpace + 'px';
            if(doodlerBottomSpace > startingPoint + 200){
                fall();
                isJumping = false;
            }

        },30);
    };

    function fall(){
        isJumping = false;
        clearInterval(upTimerID);
        // isJumping = false;
        downTimerID = setInterval(function(){
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace + 'px';

            if(doodlerBottomSpace <= 0){
                gameOver();
            }

            platforms.forEach(platform=>{
                if(
                    doodlerBottomSpace >= platform.bottom &&
                    doodlerBottomSpace <= platform.bottom + 15 &&
                    doodlerLeftSpace + 60 >= platform.left &&
                    doodlerLeftSpace <= platform.left + 85 &&
                    !isJumping
                )
                {
                    console.log("matched");
                    startingPoint = doodlerBottomSpace;
                    jump();
                    isJumping = true;
                }
                
            })

        },20);
    };


    function control(e){
        doodler.style.bottom = doodlerBottomSpace + 'px';
        if(e.key === "ArrowLeft"){
            console.log("move left");
            moveLeft();
        }
        else if(e.key === "ArrowRight"){
            console.log("Move Right");
            moveRight();
        }
        else if(e.key === "ArrowUp"){
            console.log("Arrow Up");
            moveStraight();
        }
    }


    function moveLeft(){
        if(isMovingRight){
            clearInterval(rightTimerId);
            isMovingRight = false;
        }

        isMovingLeft = true;
        leftTimerId = setInterval(function(){
            if(doodlerLeftSpace >= 0){
                doodlerLeftSpace -= 5;
                doodler.style.left = doodlerLeftSpace + 'px';
            }else{
                moveRight();
            }
            // doodlerLeftSpace -= 5;
            // doodler.style.left = doodlerLeftSpace + 'px';
        },20)
    }


    function moveRight(){
        if(isMovingLeft){
            clearInterval(leftTimerId);
            isMovingLeft = false;
        }

        isMovingRight = true;
        rightTimerId = setInterval(function(){
            if(doodlerLeftSpace <= 313){
                doodlerLeftSpace +=5;
                doodler.style.right = doodlerLeftSpace + 'px';
            }else{
                moveLeft();
            }

        },20)
    }

    function moveStraight(){
        isMovingLeft = false;
        isMovingRight = false;
        clearInterval(leftTimerId);
        clearInterval(rightTimerId);
    }

    function gameOver(){
        console.log("Game Over");
        isGameOver = true;
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        grid.innerHTML = `Score ${score}`;
        // grid.innerHTML = "Game Over";

        clearInterval(downTimerID);
        clearInterval(upTimerID);
        clearInterval(leftTimerId);
        clearInterval(rightTimerId);
    };

    function start(){
        // if(!doodlerCondition){
        if(!isGameOver){
            createPlatforms();
            createDoodler();
            // createPlatforms();
            setInterval(movePlatforms,30);
            jump(startingPoint);
            document.addEventListener('keyup',control)
        };
    }

    // Attach to Start Button
    start()
})