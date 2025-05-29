// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



// Set Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Close Links 
const navToggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click',function(){
    const containerHeight = navLinksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        navLinksContainer.style.height = `${linksHeight}px`;
    }
    else{
        navLinksContainer.style.height = 0;
    }
})


// Fixed Navbar
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav");
    }
    else{navBar.classList.remove("fixed-nav");}

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }
    else{topLink.classList.remove("show-link");}
});


// Smooth Scroll


// Select Links 
// const scrollLinks = document.querySelector(".scroll-link");

// scrollLinks.forEach(function(link){
//     link.addEventListener('click',function(e){
//         // prevent Default
//         e.preventDefault();

//         //navigate to Specific spot
//         const id = e.currentTarget.getAttribute("href").slice(1);
//         const element = document.getElementById(id);

//         // Calucalate the Heigh 
//         const navHeight = navBar.getBoundingClientRect().height;
//         const containerHeight = navLinksContainer.getBoundingClientRect().height;

//         const fixedNav = navBar.classList.contains("fixed-nav");

//         let position = element.offsetTop -navHeight;
//         if(!fixedNav){
//             position = position - navHeight;
//         };
//         if(navHeight > 82){
//             position = position + containerHeight;
//         }


//         window.scrollTo({
//             left : 0,
//             top: position,
//         });
//         navLinksContainer.style.height = 0;
//     });
// });


// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = navLinksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    navLinksContainer.style.height = 0;
  });
});
// calculate heights