// *** Select Item *** ///

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// Edit Option //

let editElement ;
let editFlag = false;
let editID = "";



// *** Event Listener *** //
form.addEventListener("submit",addItem);
// Clear Items
clearBtn.addEventListener('click',clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);



// *** Functions *** //
function addItem(e){
e.preventDefault();
const value = grocery.value;
const id = new Date().getTime().toString();

// if(value !== "" && editFlag === false)
if(value && !editFlag){
    
    // const element = document.createElement('article');
    // // Add Class
    // element.classList.add("grocery-item");
    // // Add ID
    // const attr = document.createAttribute("data-id");
    // attr.value = id;
    // element.setAttributeNode(attr);
    // element.innerHTML = 
    //                     `<p class="title">${value}</p>
    //         <div class="btn-container">
    //         <!-- edit btn -->
    //         <button type="button" class="edit-btn">
    //         <i class="fas fa-edit"></i>
    //         </button>
    //         <!-- delete btn -->
    //         <button type="button" class="delete-btn">
    //         <i class="fas fa-trash"></i>
    //         </button>
    //         </div>`;


    //         // Delet Button
    //         const deleteBtn = element.querySelector(".delete-btn");
    //         // Edit Button
    //         const editBtn = element.querySelector(".edit-btn");
    //         // Event Listener 
    //         deleteBtn.addEventListener('click',deleteItem);
    //         editBtn.addEventListener('click',editItem);

    createListItem(id,value)
    // // Append Child
    // list.appendChild(element);

    // display Alert
    displayAlert("Item added To The List","success");
    // Show Container 
    container.classList.add("show-container");
    // Add to Local Storage
    addToLocalStorage(id,value);
    // Set back to Default
    setBackToDefault();
    console.log("Add items to the list");
}

// else if (value !== "" && editFlag ===true !editFlag)
// else if (value !== "" && editFlag) {
//     editElement.innerHTML = value;
//     displayAlert("value changed", "success");

//     // edit  local storage
//     editLocalStorage(editID, value);
//     setBackToDefault();
//   } 

else if(value !== "" && editFlag){
    editElement.innerHTML = value;
    displayAlert("Value Changed", "success");
    // setBackToDefault();
    editLocalStorage(editID,value);
    setBackToDefault();
    console.log("Editing");
}

else{
    // alert.textContent = "Empty Value";
    // alert.classList.add("alert-danger");

    displayAlert("Please Enter The Value", "danger")
    console.log("Empty value");
}

}

// Display Altert Function
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Alert Remove
    setTimeout(function(){
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
    },1000);
}

// Clear Items
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert*("Empty List","danger")
    setBackToDefault();
    // Formating Local Storage //
    localStorage.removeItem('list');

}

// Delet Button
function deleteItemSingle(e){
    const element = e.currentTaget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("Item Removed","danger");
    setBackToDefault();
    // Remove From Local Storage
    removeFromLocalStorage(id);

    console.log("Delete ITem Function");
}



function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
  
    list.removeChild(element);
  
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
  
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
  }


// Edit Button
function editItefm(e){
    const element = e.currentTaget.parentElement.parentElement;
    // set edit Item
    editElement = e.currentTaget.parentElement.previousElementSibling;
    // set Form Value
    grocery.value = element.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit"
    console.log("Edit Item");
}


function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
  }

// Set Back to Default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
    console.log("Back to Default");
}



// *** Local Storage *** //

function addToLocalStorage(id,value){
    const grocery = {id,value};
    // let items = localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")) : [];
    let items = getLocalStorage();
    console.log(items);

    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));
}


function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")) : [];
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items =  items.filter(function(item){
        if(item.id !== id){
            return item
        }
    });
    console.log("Removing item from local storage");
    localStorage.setItem("list",JSON.stringify(items));
}

function editLocalStoraged(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list",JSON.stringify(items));


    // Local Storage API
    // Set Item
    // Get ITem
    // Remove Item
    // Save as String
    console.log("Edit Local Storage");
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
  
    items = items.map(function (item) {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
  }
  




// *** Setup Items *** // after refresh load the local storage data to main page //

function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id , item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id , value){
    const element = document.createElement('article');
    // Add Class
    element.classList.add("grocery-item");
    // Add ID
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = 
                        `<p class="title">${value}</p>
            <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
            </div>`;


            // Delet Button
            const deleteBtn = element.querySelector(".delete-btn");
            // Edit Button
            const editBtn = element.querySelector(".edit-btn");
            // Event Listener 
            deleteBtn.addEventListener('click',deleteItem);
            editBtn.addEventListener('click',editItem);
            // Append Child
    list.appendChild(element);

}