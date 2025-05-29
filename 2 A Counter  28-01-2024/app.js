// initial count
let count = 0;

// getting value and btn class
const value = document.querySelector("#value");
const btns =  document.querySelectorAll(".btn");

console.log(btns);


// function for increase decrease and reset also for color change
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        console.log(e);
        if(styles.contains('decrease')){
            count--;
        }
     
        else if(styles.contains('increase')){
            count++;
        }
      
        else(count = 0);

        if(count > 0){
            value.style.color = "green"
            
        }
        if(count < 0 ){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
})