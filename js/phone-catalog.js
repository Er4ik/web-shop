'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const phonesInfo = {
    model1: {
      name: 'Iphone 12 Pro Max',
      iconsrc: 'pictures/product-icons/Apple/pro-max.png',
      price: '1300$',
      priceGap: 'Over-1000$',
      brand: 'Apple',
      memory: '256gb',
      rate: '60Hz',
    },
    model2: {
      name: 'Xiaomi Black Shark 3',
      iconsrc: 'pictures/product-icons/Xiaomi/black-shark3.png',
      price: '900$',
      priceGap: '700-1000$',
      brand: 'Xiaomi',
      memory: '128gb',
      rate: '90Hz',
    },
    model3: {
      name: 'Xiaomi Mi 11 Lite',
      iconsrc: 'pictures/product-icons/Xiaomi/mi11-lite.png',
      price: '499$',
      priceGap: '300-700$',
      brand: 'Xiaomi',
      memory: '32gb',
      rate: '90Hz',
    },
    model4: {
      name: 'Iphone XS',
      iconsrc: 'pictures/product-icons/Apple/XS.png',
      price: '800$',
      priceGap: '700-1000$',
      brand: 'Apple',
      memory: '64gb',
      rate: '60Hz',
    },
    model5: {
      name: 'OnePlus 8 Pro',
      iconsrc: 'pictures/product-icons/OnePlus/8pro.png',
      price: '700$',
      priceGap: '700-1000$',
      brand: 'OnePlus',
      memory: '128gb',
      rate: '120Hz',
    },
    model6: {
      name: 'Samsung Note 20 Ultra',
      iconsrc: 'pictures/product-icons/Samsung/note-20ultra.png',
      price: '1400$',
      priceGap: 'Over-1000$',
      brand: 'Samsung',
      memory: '512gb',
      rate: '144Hz',
    },
    model7: {
      name: 'Huawei P Smart 2021',
      iconsrc: 'pictures/product-icons/Huawei/p-smart.png',
      price: '250$',
      priceGap: '100-300$',
      brand: 'Huawei',
      memory: '128gb',
      rate: '120Hz',
    },
    model8: {
      name: 'Honor 9X',
      iconsrc: 'pictures/product-icons/Huawei/honor-9x.png',
      priceGap: '300-700$',
      price: '500$',
      brand: 'Huawei',
      memory: '128gb',
      rate: '120Hz',
    },
    model9: {
      name: 'Samsung gt-e1202 Duos',
      iconsrc: 'pictures/product-icons/Samsung/duos.png',
      priceGap: '100$',
      price: '49$',
      brand: 'Samsung',
      memory: '500mb',
      rate: '30Hz',
    },
  };


  class CreateCards {
    constructor(src, alt) {
      this.parent = document.querySelector('.prod-list');
      this.src = src;
      this.alt = alt;
      this.createNewCards();
    }

    createNewCards() {
      const cardFrame = document.createElement('div');
      cardFrame.classList.add('frame');
      cardFrame.innerHTML = `<div class="product">
      <div class="icon">
        <img class="model" src=${this.src} alt=${this.alt} />
        <p class="p-name"></p>
        <div class="info">
          <p class="brand"></p>
          <p class="rate"></p>
          <p class="memory"></p>
          <p class="price"></p>
        </div>
      </div>
    </div>
    <div class="buy-buts">
      <div class="wrap1">
        <img class="basket" src="pictures/product-icons/add-to-basket.png" alt="Buy" />
      </div>
      <div class="wrap2">
        <img class="like" src="pictures/product-icons/heart.png" alt="Like" />
      </div>
    </div>`
      this.parent.append(cardFrame);
    }
  }

  const manufactCards = (n) => {
    let cardsBase = [];
    for (let i = 0; i < n; i++) {
      cardsBase[i] = new CreateCards(phonesInfo[`model${i+1}`].iconsrc, phonesInfo[`model${i+1}`].name);
    }
    return cardsBase;
  }
  manufactCards(9);


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
        const paramIndex = key + 1;
        this.positionName[key].
        innerHTML = phonesInfo[`model${paramIndex}`].name;
        this.price[key].innerHTML =
          'Price: ' + phonesInfo[`model${paramIndex}`].price;
        this.brand[key].innerHTML =
          'Brand: ' + phonesInfo[`model${paramIndex}`].brand;
        this.memory[key].innerHTML =
          'Memory size: ' + phonesInfo[`model${paramIndex}`].memory;
        this.rate[key].innerHTML =
          'Rephresh rate: ' + phonesInfo[`model${paramIndex}`].rate;
      }
    }
    settings(pict, info, name, opac, trans, opacPict) {
      info.style.opacity = opac;
      name.style.opacity = opac;
      pict.style.transform = trans;
      pict.style.opacity = opacPict;
    }

    visibleRotate(pict, info, name) {
      const visiBox = ['', '1', '0.05'];
      if (info.style.opacity === visiBox[0]) {
        this.settings(pict, info, name, visiBox[1],
          'rotateY(180deg)', visiBox[2]);
      } else {
        this.settings(pict, info, name, visiBox[0], visiBox[0], visiBox[1]);
      }
    }
  }
  const Rotor = new RotIcon();
  Rotor.icons.forEach((icn, indx) => {
    icn.addEventListener('click', () => {
      Rotor.infoSet(Rotor.icons.length);
      Rotor.visibleRotate(icn, Rotor.info[indx], Rotor.positionName[indx]);
    });
  });

  //like-button
  class Like {
    constructor() {
      this.heart = document.querySelectorAll('.like');
      this.opacChanger = ['0.9', '1'];
    }
    setUp(heartpic, link, opa) {
      heartpic.src = link;
      heartpic.style.opacity = opa;
    }

    likeClick(heartpic) {
      let src = '';
      if (heartpic.style.opacity === this.opacChanger[0]) {
        src = 'pictures/product-icons/heart-clicked.png';
        this.setUp(heartpic, src, this.opacChanger[1]);
      } else {
        src = 'pictures/product-icons/heart.png';
        this.setUp(heartpic, src, this.opacChanger[0]);
      }
    }
  }

  const likeChange = new Like();
  for (const item of likeChange.heart) {
    item.style.opacity = likeChange.opacChanger[0];
    item.addEventListener('click', () => {
      likeChange.likeClick(item);
    });
  }

  //filterForm
  class DataFilter {
    constructor() {
      this.filterBox = document.querySelectorAll('.frame');
      this.form = document.querySelector('.choice-form');
      this.filterClass = '';
      this.infoGap = [];
    }

    formFilter() {
      this.form.addEventListener('click', event => {
        const classN = event.target.className;
        if (classN !== 'variant' && classN !== 'reset') {
          return false;
        }
        this.filterClass = event.target.dataset['f'];
        this.infoGap = ['brand', 'priceGap', 'memory', 'rate'];
        for (let elem = 0; elem < this.filterBox.length; elem++) {
          const sortIndex = elem + 1;
          this.infoGap.forEach(item => {
            this.filterBox[elem].classList.add(
              `${phonesInfo[`model${sortIndex}`][item]}`
            );
          });
        }
        for (const key of this.filterBox) {
          key.classList.remove('hide');
          if (
            !key.classList.contains(this.filterClass) &&
            this.filterClass !== 'all'
          ) {
            key.classList.add('hide');
          }
        }
      });
    }
  }

  const filterEx = new DataFilter();
  filterEx.formFilter();

  //Description
  class DeskRot {
    constructor() {
      this.description = document.querySelector('.list-discript');
      this.container = document.querySelector('.phone-container');
      this.text = `Click on the product picture 
    to see information about the model`;
    }

    setvisible(description, rotate, marg, text) {
      description.style.transform = rotate;
      description.style.marginRight = marg;
      description.innerHTML = text;
    }

    changeR() {
      this.container.addEventListener('mouseover', () => {
        this.setvisible(this.description,
          'rotateZ(720deg)', '820px', this.text);
      });
    }

    reverseR() {
      this.container.addEventListener('mouseout', () => {
        this.setvisible(this.description, 'rotateZ(-720deg)', '1400px', '');
      });
    }
  }

  const descriptAnim = new DeskRot();
  descriptAnim.changeR();
  descriptAnim.reverseR();

  //automatic-slider
  class Slider {
    constructor() {
      this.dots = document.querySelectorAll('.dot');
      this.dotsArea = document.querySelector('.dots-block');
      this.slides = document.querySelectorAll('.slide');
      this.prev = document.querySelector('.prev-button');
      this.next = document.querySelector('.next-button');
      this.picIndx = 1;
      this.slideIndex = 1;
      this.timer;
    }

    showSlides(n) {
      if (n < 1) {
        this.slideIndex = this.slides.length;
      } else if (n > this.slides.length) {
        this.slideIndex = 1;
      }
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none';
      }
      for (let i = 0; i < this.dots.length; i++) {
        this.dots[i].classList.remove('dot-active');
      }
      this.slides[this.slideIndex - 1].style.display = 'block';
      this.dots[this.slideIndex - 1].classList.add('dot-active');
    }

    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    }

    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    }

    autoSlider() {
      const workTime = 5000;
      this.timer = setInterval(() => this.plusSlides(1), workTime);
    }

    prevBut() {
      this.prev.addEventListener('click', () => {
        this.plusSlides(-this.picIndx);
      });
    }

    nextBut() {
      this.next.addEventListener('click', () => {
        this.plusSlides(this.picIndx);
      });
    }

    dotTap() {
      this.dotsArea.addEventListener('click', event => {
        for (let i = 0; i < this.dots.length + 1; i++) {
          if (
            event.target.classList.contains('dot') &&
            event.target === this.dots[i - 1]
          ) {
            this.currentSlide(i);
          }
        }
      });
    }
  }

  const sliderEx = new Slider();
  sliderEx.showSlides(sliderEx.slideIndex);
  sliderEx.autoSlider();
  sliderEx.prevBut();
  sliderEx.nextBut();
  sliderEx.dotTap();
});