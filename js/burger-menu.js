'use strict';

// burger-menu
{
    class Burger {
        constructor(flag) {
            this.flag = flag;
            this.but = document.querySelector('.button');
            this.burger = document.querySelector('.burger');
            this.menuIcon = document.querySelector('.menu-icon');
            this.burger.style.marginLeft = 1155 + 'px';
        }

        

        toggleMenuIcon() {
            this.menuIcon.classList.toggle('active');
            if (this.flag) {
                this.but.style.display = 'flex';
                this.burger.style.marginLeft = 189 + 'px';
                this.flag = false;
                return true;
            } else {
                this.but.style.display = 'none';
                this.burger.style.marginLeft = 1155 + 'px';
                this.flag = true;
                return true;
            }
        }
    }

    const burgerMenu = new Burger(true);    

    burgerMenu.burger.addEventListener('click', function () {
        burgerMenu.but.classList.add('b-show');
    });

    burgerMenu.menuIcon.addEventListener('click', function () {
        burgerMenu.toggleMenuIcon()
    });
}