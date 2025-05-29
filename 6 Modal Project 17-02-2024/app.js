// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModal = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overLay = document.querySelector(".modal-overlay");


// this function will open Modal on webpage
openModal.addEventListener('click', () => {
    overLay.classList.add('open-modal');
    console.log("open modal buttn");
});

// this function will close Modal on webpage
closeBtn.addEventListener('click', () => {
    overLay.classList.remove('open-modal');
    console.log("close modal buttn");
})