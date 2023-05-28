// select modal-btn,modal-overlay,close-btn
const openModal = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn
openModal.addEventListener('click', function () {
    //see what classes are on the modal overlay
    //console.log(overlay.classList);

    // when user clicks modal-btn add .open-modal to modal-overlay
    overlay.classList.add('open-modal');
    //console.log(overlay.classList);
})

// listen for click events on close-btn
closeBtn.addEventListener('click', function () {
    overlay.classList.remove('open-modal');
})


// when user clicks close-btn remove .open-modal from modal-overlay
