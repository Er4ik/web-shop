"use strict";

//icons-rotate
class RotIcon {
  constructor() {
    this.icons = document.querySelectorAll(".icon img");
    this.positionName = document.querySelectorAll(".p-name");
    this.price = document.querySelectorAll(".price");
    this.info = document.querySelectorAll(".info");
    this.brand = document.querySelectorAll(".brand");
    this.memory = document.querySelectorAll(".memory");
    this.rate = document.querySelectorAll(".rate");
  }

  infoSet(n) {
    for (let key = 0; key < n; key++) {
      this.positionName[key].innerHTML = phonesInfo[`model${key + 1}`].name;
      this.price[key].innerHTML =
        "Price: " + phonesInfo[`model${key + 1}`].price;
      this.brand[key].innerHTML =
        "Brand: " + phonesInfo[`model${key + 1}`].brand;
      this.memory[key].innerHTML =
        "Memory size: " + phonesInfo[`model${key + 1}`].memory;
      this.rate[key].innerHTML =
        "Rephresh rate: " + phonesInfo[`model${key + 1}`].rate;
    }
  }
  settings(pict, info, name, opac, trans, opacPict) {
    info.style.opacity = opac;
    name.style.opacity = opac;
    pict.style.transform = trans;
    pict.style.opacity = opacPict;
  }
  visibleRotate(pict, info, name) {
    if (info.style.opacity === '0') {
      this.settings(pict, info, name, "1", "rotateY(180deg)", "0.05");
    } else {
      this.settings(pict, info, name, 0, "", 1);
    }
  }
}
const Rotor = new RotIcon();
Rotor.icons.forEach((icn, indx) => {
  icn.addEventListener("click", () => {
    Rotor.infoSet(9);
    Rotor.visibleRotate(icn, Rotor.info[indx], Rotor.positionName[indx]);
  });
});

//like-button
class Like {
  constructor() {
    this.heart = document.querySelectorAll(".like");
  }
  setUp(heartpic, link, opa) {
    heartpic.src = link;
    heartpic.style.opacity = opa;
  }

  likeClick(heartpic) {
    if (heartpic.style.opacity === "0.9") {
      this.setUp(heartpic, "pictures/product-icons/heart-clicked.png", 1);
    } else {
      this.setUp(heartpic, "pictures/product-icons/heart.png", 0.9);
    }
  }
}
const likeChange = new Like();
likeChange.heart.forEach((item) => {
  item.style.opacity = 0.9;
  item.addEventListener("click", () => {
    likeChange.likeClick(item);
  });
});

//filterForm
class DataFilter {
  constructor() {
    this.filterBox = document.querySelectorAll(".frame");
    this.form = document.querySelector(".choice-form");
    this.filterClass = '';
    this.infoGap = [];
  }
  formFilter() {
    this.form.addEventListener("click", (event) => {
      if (
        event.target.className !== "variant" &&
        event.target.className !== "reset"
      ) {
        return false;
      }
      this.filterClass = event.target.dataset["f"];
      this.infoGap = ["brand", "priceGap", "memory", "rate"];
      for (let elem = 0; elem < 9; elem++) {
        this.infoGap.forEach((item) => {
          this.filterBox[elem].classList.add(`${phonesInfo[`model${elem + 1}`][item]}`);
        });
      }
      for (let key of this.filterBox) {
        key.classList.remove("hide");
        if (!key.classList.contains(this.filterClass) && this.filterClass !== "all") {
          key.classList.add("hide");
        }
      }
    });
  }
}
const filterEx = new DataFilter;
filterEx.formFilter();


//Description
class DeskRot {
  constructor() {
    this.description = document.querySelector(".list-discript");
    this.container = document.querySelector(".phone-container");
    this.text = "Click on the product picture to see information about the model"
  }
  setvisible(description, rotate, marg, text) {
    description.style.transform = rotate;
    description.style.marginRight = marg;
    description.innerHTML = text;
  }
  changeR() {
    this.container.addEventListener("mouseover", () => {
      this.setvisible(this.description, "rotateZ(720deg)", "820px", this.text);
    });
  }
  reverseR() {
    this.container.addEventListener("mouseout", () => {
      this.setvisible(this.description, "rotateZ(-720deg)", "1400px", "");
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
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n)
  }

  autoSlider() {
    this.timer = setInterval(() => this.plusSlides(1), 5000);
  }
  prevBut() {
    this.prev.addEventListener("click", () => {
      this.plusSlides(-this.picIndx);
    });
  }
  nextBut() {
    this.next.addEventListener("click", () => {
      this.plusSlides(this.picIndx);
    });
  }
  dotTap() {
    this.dotsArea.addEventListener("click", (event) => {
      for (let i = 0; i < this.dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target === this.dots[i - 1]) {
          this.currentSlide(i);
        }
      }
    });
  }
}
const sliderEx = new Slider;
sliderEx.showSlides(sliderEx.slideIndex);
sliderEx.autoSlider();
sliderEx.prevBut();
sliderEx.nextBut();
sliderEx.dotTap();