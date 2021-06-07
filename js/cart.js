'use strict';
//modal-window
const openCart = document.querySelector('.modal-cart');
const closeCart = document.querySelector('.close-but');
const buyButtons = document.querySelectorAll('.basket');

const closeModalCart = function () {
    if (openCart.classList.contains('modal-active')) {
        openCart.classList.remove('modal-active');
        openCart.classList.add('modal-hide');
    }
}
const openModalCart = function () {
    openCart.classList.remove('modal-hide');
    openCart.classList.add('modal-active');
}
for (let key of buyButtons) {
    key.addEventListener('click', () => {
        openModalCart();
    });
}
closeCart.addEventListener('click', () => {
    closeModalCart();
});