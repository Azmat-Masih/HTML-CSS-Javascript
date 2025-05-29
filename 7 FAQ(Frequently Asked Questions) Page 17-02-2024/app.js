// ==> using selectors inside the element <== // Working //


const questions_ = document.querySelectorAll('.question');

questions_.forEach(function (question) {
    console.log("Question ==>", question);
    const btn = question.querySelector('.question-btn');
    console.log("btn ==>", btn);

    btn.addEventListener("click", function () {

        questions_.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});




// ==> travesing the dom <== // Not Working //

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question =  e.currentTarget.parentELement.parentELement;
//         question.classList.toggle("show-text");

//     });
// });