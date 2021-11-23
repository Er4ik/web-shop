'use strict';

document.addEventListener('DOMContentLoaded', () => {

  //modal-window
  class Modal {
    constructor() {
      this.openCart = document.querySelector('.modal-cart');
      this.closeCart = document.querySelector('.close-but');
      this.buyButtons = document.querySelectorAll('.basket');
    }

    closeModalCart() {
      if (this.openCart.classList.contains('modal-active')) {
        this.openCart.classList.remove('modal-active');
        this.openCart.classList.add('modal-hide');
      }
    }

    openModalCart() {
      this.openCart.classList.remove('modal-hide');
      this.openCart.classList.add('modal-active');
    }
  }

  const cartWindow = new Modal();

  for (const key of cartWindow.buyButtons) {
    key.addEventListener('click', () => {
      cartWindow.openModalCart();
    });
  }
  cartWindow.closeCart.addEventListener('click', () => {
    cartWindow.closeModalCart();
  });


  //go to top button
  class TopButton {
    constructor() {
      this.goTopBtn = document.querySelector('.back_to_top');
    }

    trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        this.goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        this.goTopBtn.classList.remove('back_to_top-show');
      }
    }

    backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(() => this.backToTop(), 5);
      }
    }
  }

  const arrow = new TopButton();
  window.addEventListener('scroll', () => {
    arrow.trackScroll();
  });
  arrow.goTopBtn.addEventListener('click', () => {
    arrow.backToTop();
  });
});
