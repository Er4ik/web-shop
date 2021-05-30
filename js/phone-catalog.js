'use strict';

//icons-rotate
class RotIcon {
    constructor() {
        this.icons = document.querySelectorAll('.icon img');
        this.positionName = document.querySelectorAll('.p-name');
        this.price = document.querySelectorAll('.price');
        this.info = document.querySelectorAll('.info');
        this.brand = document.querySelectorAll('.brand');
        this.memory = document.querySelectorAll('.memory');
        this.rate = document.querySelectorAll('.rate');
    }

    infoSet(n) {
        for (let key = 0; key < n; key++) {
            this.positionName[key].innerHTML = phonesInfo[`model${key + 1}`].name;
            this.price[key].innerHTML = 'Price: ' + phonesInfo[`model${key + 1}`].price;
            this.brand[key].innerHTML = 'Brand: ' + phonesInfo[`model${key +1 }`].brand;
            this.memory[key].innerHTML = 'Memory size: ' + phonesInfo[`model${key + 1}`].memory;
            this.rate[key].innerHTML = 'Rephresh rate: ' + phonesInfo[`model${key + 1}`].rate;
        }
    }
    settings(pict, info, name, opac, trans, opacPict) {
        info.style.opacity = opac;
        name.style.opacity = opac;
        pict.style.transform = trans;
        pict.style.opacity = opacPict;
    }
    visibleRotate(pict, info, name) {
        if (info.style.opacity == 0) {
            this.settings(pict, info, name, '1', 'rotateY(180deg)', '0.05');
        } else {
            this.settings(pict, info, name, 0, '', 1);
        }
    }
}
const Rotor = new RotIcon;
Rotor.icons.forEach((icn, indx) => {
    icn.addEventListener('click', () => {
        Rotor.infoSet(9);
        Rotor.visibleRotate(icn, Rotor.info[indx], Rotor.positionName[indx]);
    })
});

//like-button
class Like {
    constructor() {
        this.heart = document.querySelectorAll('.like');
    }
    setUp(heartpic, link, opa) {
        heartpic.src = link;
        heartpic.style.opacity = opa;
    }

    likeClick(heartpic) {
        if (heartpic.style.opacity === '0.9') {
            this.setUp(heartpic, "pictures/product-icons/heart-clicked.png", 1)
        } else {
            this.setUp(heartpic, "pictures/product-icons/heart.png", 0.9)
        }
    }

}
const likeChange = new Like;
likeChange.heart.forEach((item) => {
    item.style.opacity = 0.9;
    item.addEventListener('click', () => {
        likeChange.likeClick(item);
    })
});

//filterForm
const filterBox = document.querySelectorAll('.frame');
const form = document.querySelector('.choice-form');

form.addEventListener('click', (event) => {
    if (event.target.className !== 'variant' && event.target.className !== 'reset') {
        return false;
    }
    let filterClass = event.target.dataset['f'];
    const priceGap1 = ['brand', 'priceGap', 'memory', 'rate'];
    for (let elem = 0; elem < 9; elem++) {
        priceGap1.forEach((item) => {
            filterBox[elem].classList.add(`${phonesInfo[`model${elem + 1}`][item]}`);
        });
    }
    for (let key of filterBox) {
        key.classList.remove('hide');
        if (!key.classList.contains(filterClass) && filterClass !== 'all') {
            key.classList.add('hide');
        }
    }

});

//Description
class DeskRot {
    constructor() {
        this.description = document.querySelector('.list-discript');
        this.container = document.querySelector('.phone-container');
    }
    changeR() {
        this.container.addEventListener('mouseover', () => {
            this.description.style.transform = 'rotateZ(720deg)';
            this.description.style.marginRight = '820px';
            this.description.innerHTML = 'Click on the product picture to see information about the model';
        });
    }
    reverseR() {
        this.container.addEventListener('mouseout', () => {
            this.description.style.transform = 'rotateZ(-720deg)';
            this.description.style.marginRight = '1400px';
            this.description.innerHTML = '';
        })
    }
}
const descriptAnim = new DeskRot;
descriptAnim.changeR();
descriptAnim.reverseR();