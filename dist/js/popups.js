const btns = document.querySelectorAll('.popup-link');
const popups = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');
const closebody = document.querySelector('body'); 

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    popups.style.display = 'block';
  });
});

closePopup.onclick = function () {
  popups.style.display = "none";
}


// document.closebody.onclick = function (event) {
//   if (event.target == popups) {
//      popups.style.display = "none";
//   }
// }

