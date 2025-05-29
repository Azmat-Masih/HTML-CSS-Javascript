const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');


about.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    console.log(id);

    if(id){
        // Remove Active from other button
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // Hide Other Articles
        articles.forEach(function(article){
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});