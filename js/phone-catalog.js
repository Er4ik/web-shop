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
            this.positionName[key].innerHTML = phonesInfo[`model${key + 1}`];
            this.price[key].innerHTML = 'Price: ' + phonesInfo[`price${key + 1}`];
            this.brand[key].innerHTML = 'Brand: ' + phonesInfo[`brand${key + 1}`];
            this.memory[key].innerHTML = 'Memory size: ' + phonesInfo[`memory${key + 1}`];
            this.rate[key].innerHTML = 'Rephresh rate: ' + phonesInfo[`rate${key + 1}`];
        }
    }
    settings(pict, info, name, opac, trans, opacPict) {
        info.style.opacity = opac;
        name.style.opacity = opac;
        pict.style.transform = trans;
        pict.style.opacity = opacPict;
        return true;
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
        return true;
    }

    likeClick(heartpic) {
        if (heartpic.style.opacity == 0.9) {
            this.setUp(heartpic, "pictures/product-icons/heart-clicked.png", 1)
            return true;
        } else {
            this.setUp(heartpic, "pictures/product-icons/heart.png", 0.9)
            return false;
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
    } else {
        let filterClass = event.target.dataset['f'];
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide');
            }
        });
    }
});