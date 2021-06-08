'use strict';

// burger-menu
document.addEventListener('DOMContentLoaded', () => {
  class Burger {
    constructor(flag) {
      this.flag = flag;
      this.but = document.querySelector('.button');
      this.burger = document.querySelector('.burger');
      this.menuIcon = document.querySelector('.menu-icon');
    }

    showButtons() {
      if (this.flag) {
        this.flag = false;
        return this.but.classList.add('b-show');
      }
      this.flag = true;
      return this.but.classList.remove('b-show');
    }

    toggleMenuIcon() {
      this.menuIcon.classList.toggle('active');
    }
  }

  const burgerMenu = new Burger(true);

  burgerMenu.menuIcon.addEventListener('click', () => {
    burgerMenu.toggleMenuIcon();
    burgerMenu.showButtons();
  });
});
