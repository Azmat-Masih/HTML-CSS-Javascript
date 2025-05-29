// ===> END OF MENU ARRAY <=== // step 1

const menuArry = [
    {
        id: 1,
        title: "butter Milk Cake",
        category: "breakfast",
        price: 17.3,
        img: "image1.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 2,
        title: "Coffee Cake",
        category: "lunch",
        price: 10.3,
        img: "image2.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 3,
        title: "Pinaple Cake",
        category: "breakfast",
        price: 15.3,
        img: "image3.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 4,
        title: "Rose Valvet Cake",
        category: "lunch",
        price: 4.3,
        img: "image4.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 5,
        title: "Milk Cake",
        category: "sweets",
        price: 23.3,
        img: "image5.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 6,
        title: "Cheeze Cake",
        category: "sweets",
        price: 43.3,
        img: "image6.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 7,
        title: "Hot Milk",
        category: "sweets",
        price: 32.3,
        img: "image7.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 8,
        title: "Stake",
        category: "dinner",
        price: 23.3,
        img: "image8.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 9,
        title: "Milk",
        category: "dinner",
        price: 9.3,
        img: "image9.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },
    {
        id: 10,
        title: "Coffee",
        category: "dinner",
        price: 6.3,
        img: "image10.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Facilis laboriosam itaque, non veniam odio distinctio laborum! Temporibus soluta neque iste aut ea praesentium, 
    maxime ipsum magni impedit facilis atque`
    },

]; 

// ===> END OF MENU ARRAY <=== // 



// ===> START OF INITIALIZING THE VERIABLES <=== // 

const sectionCenter = document.querySelector('.section-center');

// const filterBtns = document.querySelectorAll(".filter-btn"); // moving this to DOMCONTENT LOADED //

const buttonContainer = document.querySelector(".btn-container")
// ===> END OF INITIALIZING THE VERIABLES <=== // 



//===> START LOADS MENU <===// step 2 *with adding button section

window.addEventListener("DOMContentLoaded", function () {
    // we will create a function and paste this code in it

    // console.log("shake and bake");
    // let displayMenu = menuArry.map(function(item){
    //     console.log("items ==>",item);
    //     // return item;

    //     // return `<h1>Hello world</h1>` //modifying the result //
    //     // return `<h1>${item.title}</h1>`; // this will return all the titles of the menuArry //

    //     return `<article class="menu-item">
    //     <img src=${item.img} class="photo" alt=${item.title}>
    //     <div class="item-info">
    //       <header>
    //         <h4>${item.title}</h4>
    //         <h4 class="price">${item.price}</h4>
    //       </header>
    //       <p class="item-text">${item.desc}</p>
    //     </div>
    //   </article>`
    // });
    // displayMenu = displayMenu.join("");
    // console.log("Display Menu ==>", displayMenu)
    // sectionCenter.innerHTML = displayMenu;



    displayMenuItems(menuArry); // passing menuArry in this function //

    // == For adding filter buttons using javascript == //

    // Start creating new categories array using maping //
    // const categories = menuArry.map(function(k){
    //     return k.category;
    // });
    // End creating new categories array using maping //


    // ===> * NOW WE WILL CUT THE CODE FROM HERE AND PASTE IN THE DISPLAYFILTERBUTTON() FUNCTION * <=== //

    // // Start of Now using reduce instead of maping //
    // const categories = menuArry.reduce(function (values, item) {
    //     if (!values.includes(item.category)) {
    //         values.push(item.category);
    //     } return values;
    // }, ['all']
    // );
    // // End of Now using reduce instead of maping //




    // console.log("Categories in Array ==> ", categories);



    // const categoriesBtn = categories.map(function (category) {
    //     return `<button class="filter-btn" type="button" data-id="${category}"> ${category} </button>`
    // }).join("");
    // console.log("category buttons ==> ", categoriesBtn);
    // buttonContainer.innerHTML = categoriesBtn;



    // const filterBtns = document.querySelectorAll(".filter-btn"); // moved from top to here
    // filterBtns.forEach(function (btn) {
    //     btn.addEventListener("click", function (e) {
    //         // console.log(e.currentTarget.dataset.id);
    //         const category = e.currentTarget.dataset.id;

    //         // creating a new array for category //
    //         const menuCategory = menuArry.filter(function (menuItem) {
    //             console.log("menuitem category ==>", menuItem.category);
    //             // return menuItem;
    //             if (menuItem.category === category) {
    //                 return menuItem;
    //             }
    //         });
    //         // End a new array for category //

    //         if (category === "all") {
    //             displayMenuItems(menuArry); // this is for all category //
    //         }
    //         else { displayMenuItems(menuCategory) }; //this will show different category //

    //         console.log("menuCategory ==>", menuCategory);
    //     });
    // });


    // ===> * NOW WE WILL CUT THE CODE FROM ABOVE AND PASTE IN THE DISPLAYFILTERBUTTON() FUNCTION * <=== //

    // CALLING DISPLAYFILTERBUTTON FUNCTION //
    displayFilterButton();
});

//===> END LOADS MENU <===//



//===> START FILTER MENU <===// after adding dynimical categories we will put this code in the end DomContectLoaded and commit this code from here // Step 4

// filterBtns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         // console.log(e.currentTarget.dataset.id);
//         const category = e.currentTarget.dataset.id;

//         // creating a new array for category //
//         const menuCategory = menuArry.filter(function(menuItem){
//             console.log("menuitem category ==>", menuItem.category);
//             // return menuItem;
//             if(menuItem.category === category){
//                 return menuItem;
//             }
//         });
//         // End a new array for category //

//             if(category === "all"){
//                 displayMenuItems(menuArry); // this is for all category //
//             }
//             else{displayMenuItems(menuCategory)}; //this will show different category //

//         console.log("menuCategory ==>", menuCategory);
//     });
// });

//===> END FILTER MENU <===//


// ===> START DISPLAY FUNCTION <=== // step 3 

function displayMenuItems(menuItems) {
    // in maping we will change menuArry.map to meunItems.map
    console.log("shake and bake");
    let displayMenu = menuItems.map(function (item) {
        console.log("items ==>", item);
        // return item;

        // return `<h1>Hello world</h1>` //modifying the result //
        // return `<h1>${item.title}</h1>`; // this will return all the titles of the menuArry //

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`
    });
    displayMenu = displayMenu.join("");
    console.log("Display Menu ==>", displayMenu)
    sectionCenter.innerHTML = displayMenu;
}

// ===> END DISPLAY FUNCTION <=== //



// ===> START FILTER BUTTONS FUNCTION <=== //  Step 5 now we are creating a function for filter button and cut the code from DomContentLoaded and paste it here //

function displayFilterButton(){
    
    // Start of Now using reduce instead of maping //
    const categories = menuArry.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        } return values;
    }, ['all']
    );
    // End of Now using reduce instead of maping //




    console.log("Categories in Array ==> ", categories);



    const categoriesBtn = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}"> ${category} </button>`
    }).join("");
    console.log("category buttons ==> ", categoriesBtn);
    buttonContainer.innerHTML = categoriesBtn;



    const filterBtns = document.querySelectorAll(".filter-btn"); // moved from top to here
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;

            // creating a new array for category //
            const menuCategory = menuArry.filter(function (menuItem) {
                console.log("menuitem category ==>", menuItem.category);
                // return menuItem;
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // End a new array for category //

            if (category === "all") {
                displayMenuItems(menuArry); // this is for all category //
            }
            else { displayMenuItems(menuCategory) }; //this will show different category //

            console.log("menuCategory ==>", menuCategory);
        });
    });

};

// ===> END OF FILTER BUTTONS FUNCTION <=== //