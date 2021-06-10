'use strict';

document.addEventListener('DOMContentLoaded', () => {
//-------------------slider catalog-------------------
//Данный класс предназначен для показа кнопок в каталоге второй страницы

  class SliderCatalog {
    constructor(flag) {
      this.plusCat = document.querySelector('.plusCat');
      this.catDescr = document.querySelector('.catDescr');
      this.flag = flag;
      this.catDescr.classList.add('p-show');
      this.catDescr.style.display = 'none';
    }

    showCatalog(disp, transform, colour, opac, flag) {
      this.catDescr.style.display = disp;
      this.plusCat.style.transform = transform;
      this.plusCat.style.color = colour;
      this.plusCat.style.opacity = opac;
      this.flag = flag;
      return true;
    }

    showCat() {
      let opacityCatalog = 0;
      const opacityVis = ['0.3', '1'];
      if (!this.flag) {
        opacityCatalog = opacityVis[0];
        return this.showCatalog(
          'none',
          'rotate(-180deg)',
          'white',
          opacityCatalog,
          true
        );
      }
      opacityCatalog = opacityVis[1];
      return this.showCatalog(
        'flex',
        'rotate(225deg)',
        'darkorange',
        opacityCatalog,
        false
      );
    }
  }

  const slider = new SliderCatalog(true);

  slider.plusCat.addEventListener('click', () => {
    slider.showCat();
  });


  //-------------------slider description-------------------
  // Класс работает с изменением описания и скроллом картинок
  // при клике на кнопку 'next'


  class SliderProd {
    constructor(offset, countNum) {
      this.sliderLine = document.querySelector('.slider-line');
      this.nameProd = document.querySelector('.name-descr');
      this.descrProd = document.querySelector('.text-descr');
      this.scrollNumber = document.querySelector('.number');
      this.wheelColor1 = document.querySelector('.wh1');
      this.wheelColor2 = document.querySelector('.wh2');
      this.wheelColor3 = document.querySelector('.wh3');

      this.aboutCatalog = {
        Head1: ['NEW GENERATION<br>SMARTPHONES'],
        Head2: ['THE MOST ADVANCED SMARTWATCH'],
        Head3: ['THE BEST LAPTOPS<br>OF OUR RIME'],
        Description1: [
          `The latest technology, the highest speed of work,
      <br>compactness and incredibly beautiful appearance`,
        ],
        Description2: [
          `A computerized wristwatch with extended functionality:
      comfortable, beautiful, cool`,
        ],
        Description3: [
          `Excellent laptops with high performance and <br>autonomy, 
      thin bezels and luminous keyboard`,
        ],
      };

      this.whColor = [this.wheelColor1, this.wheelColor2, this.wheelColor3];

      this.countNum = countNum;
      this.offset = offset;

      this.scrollNumber.innerHTML = this.countNum;
      this.wheelColor1.style.backgroundColor = 'darkorange';
      this.nameProd.innerHTML = this.aboutCatalog.Head1;
      this.descrProd.innerHTML = this.aboutCatalog.Description1;
    }

    changeDataPict(count) {
      if (`Head${count}` in this.aboutCatalog) {
        this.nameProd.innerHTML = this.aboutCatalog[`Head${count}`];
        this.descrProd.innerHTML = this.aboutCatalog[`Description${count}`];
        return true;
      }
      this.aboutCatalog[`Head${count}`] = '';
      return false;
    }

    changeNum(count) {
      const a = (document.querySelector('.number').value = count);
      document.querySelector('.number').innerHTML = a;
    }

    wheelColorChange(clr1, clr2, clr3) {
      this.wheelColor1.style.backgroundColor = clr1;
      this.wheelColor2.style.backgroundColor = clr2;
      this.wheelColor3.style.backgroundColor = clr3;
      return true;
    }

    scrollPict() {
      const shiftWidthL = 555;
      const widthResetL = 0;
      this.offset += shiftWidthL;
      if (this.offset > shiftWidthL * 2) {
        this.offset = widthResetL;
      }
      this.sliderLine.style.left = -this.offset + 'px';
      return this.offset;
    }

    scroll() {
      const numberDescr = [1, 2, 3];
      this.countNum++;
      if (this.countNum > numberDescr[2]) {
        this.countNum = numberDescr[0];
      }
      if (this.countNum === numberDescr[0]) {
        this.wheelColorChange('darkorange', 'white', 'white');
      } else if (this.countNum === numberDescr[1]) {
        this.wheelColorChange('white', 'darkorange', 'white');
      } else {
        this.wheelColorChange('white', 'white', 'darkorange');
      }
      this.changeNum(this.countNum);
      this.scrollPict();
      this.changeDataPict(this.countNum);
      return true;
    }
  }

  const change = new SliderProd(0, 1);

  document.querySelector('.next').addEventListener('click', () => {
    change.scroll();
  });


  //-------------------slider picture_Back_Text-------------------

  // Класс предназначен для разворота картинок на второй
  // странице при клике по ним

  class RotPict {
    constructor(flag) {
      this.prodPict = document.querySelectorAll('.product-picture');
      this.dataBackPict1 = document.querySelector('.pictBack1');
      this.dataBackPict2 = document.querySelector('.pictBack2');
      this.dataBackPict3 = document.querySelector('.pictBack3');

      this.aboutProductBack = {
        prod1: [
          `Packed with Innovative Features Including a Super Retina Display,
      TrueDepth Camera System, Face ID and A13 Bionic Chipwith Neural
      Engine`,
        ],
        prod2: [
          `Move. Exercise. Stand. Track all the ways you're active.
      Activity rings show your daily activity.Make it your 
      goal to close them every day.
      Tokeep you motivated there are awards, personalized 
      coaching, and Activity competitions`,
        ],
        prod3: [
          `13.3-inch (diagonal) LED-backlit display with IPS
      technology;
      2560-by-1600 native resolution at 227 pixels per 
      inch with support for millions of colors`,
        ],
      };

      this.flagRotate = flag;
      this.dataBackPict1.innerHTML = this.aboutProductBack.prod1;
      this.dataBackPict2.innerHTML = this.aboutProductBack.prod2;
      this.dataBackPict3.innerHTML = this.aboutProductBack.prod3;
    }

    conditionForRetutrn(picture, rotate, flag, num) {
      picture.style.transform = rotate;
      picture.style.opacity = num;
      this.flagRotate = flag;
      return this.flagRotate;
    }

    rotatePict(pict) {
      const opacityVis = [0.2, 1];
      if (pict.style.opacity === `${opacityVis[0]}`) {
        return this.conditionForRetutrn(pict, '', true, opacityVis[1]);
      }
      return this.conditionForRetutrn(
        pict,
        'rotateY(180deg)',
        false,
        opacityVis[0]
      );
    }
  }

  const rotatePicture = new RotPict(true);

  for (const elem of rotatePicture.prodPict) {
    elem.addEventListener('click', () => {
      rotatePicture.rotatePict(elem);
    });
  }


  //-------------------description service-------------------

  // Класс работает с данными на 3 странице.
  // Изменяет цвета кнопок и описание при кликах

  class ServiceDesrc {
    constructor() {
      this.backButton1 = document.querySelector('.serv1');
      this.backButton2 = document.querySelector('.serv2');
      this.backButton3 = document.querySelector('.serv3');
      this.serviceHead = document.querySelector('.head-serv1');
      this.serviceDescr = document.querySelector('.descr-serv2');
      this.servIcon1 = document.querySelector('.serv-icon1');
      this.servIcon2 = document.querySelector('.serv-icon2');
      this.servIcon3 = document.querySelector('.serv-icon3');

      this.aboutService = {
        HeadServ1: ['DELIVERY'],
        HeadServ2: ['GUARANTEE'],
        HeadServ3: ['CREDIT'],
        DescrServ1: [
          `We will be happy to deliver your goods directly
      to your entrance for free!
      After all, we will make good money by lifting it
      to your floor.`,
        ],
        DescrServ2: [
          `Our company provides you with a guarantee for 
      all purchased products
      for a year, as well as the ability to return 
      goods within 14 days.`,
        ],
        DescrServ3: [
          `The company EAshop also provides the opportunity 
      to purchase goods on credit for up to a year at
      20 percent<br> per annum.`,
        ],
      };

      this.backButton1.style.backgroundColor = 'black';
      this.backButton1.style.color = 'white';
      this.serviceHead.innerHTML = this.aboutService.HeadServ1;
      this.serviceDescr.innerHTML = this.aboutService.DescrServ1;
      this.servIcon2.style.display = 'none';
      this.servIcon3.style.display = 'none';
      this.color = ['black', 'white', ''];
      this.blockVis = ['block', 'none'];

      this.bodyValue = {
        but: ['.s1', '.s2', '.s3'],
        valArr1: [
          'Serv1',
          [
            this.color[0],
            this.color[2],
            this.color[2],
            this.color[1],
            this.color[0],
            this.color[0],
          ],
          [this.blockVis[0], this.blockVis[1], this.blockVis[1]],
        ],
        valArr2: [
          'Serv2',
          [
            this.color[2],
            this.color[0],
            this.color[2],
            this.color[0],
            this.color[1],
            this.color[0],
          ],
          [this.blockVis[1], this.blockVis[0], this.blockVis[1]],
        ],
        valArr3: [
          'Serv3',
          [
            this.color[2],
            this.color[2],
            this.color[0],
            this.color[0],
            this.color[0],
            this.color[1],
          ],
          [this.blockVis[1], this.blockVis[1], this.blockVis[0]],
        ],
      };
    }

    backBut(clrBack1, clrBack2, clrBack3, clrFont1, clrFont2, clrFont3) {
      this.backButton1.style.backgroundColor = clrBack1;
      this.backButton2.style.backgroundColor = clrBack2;
      this.backButton3.style.backgroundColor = clrBack3;
      this.backButton1.style.color = clrFont1;
      this.backButton2.style.color = clrFont2;
      this.backButton3.style.color = clrFont3;
      return true;
    }

    changeData(serv) {
      if ([`Head${serv}`] in this.aboutService) {
        this.serviceHead.innerHTML = this.aboutService[`Head${serv}`];
        this.serviceDescr.innerHTML = this.aboutService[`Descr${serv}`];
        return true;
      }
      return false;
    }

    servIconVisible(vis1, vis2, vis3) {
      this.servIcon1.style.display = vis1;
      this.servIcon2.style.display = vis2;
      this.servIcon3.style.display = vis3;
      return true;
    }

    changeDescrService(data, but, visible) {
      this.changeData(data);
      this.backBut(...but);
      this.servIconVisible(...visible);
    }
  }

  const desrcServ = new ServiceDesrc();

  desrcServ.bodyValue.but.map(elem => {
    document.querySelector(elem).addEventListener('click', () => {
      desrcServ.changeDescrService(
        ...desrcServ.bodyValue[
          `valArr${desrcServ.bodyValue.but.indexOf(elem) + 1}`
        ]
      );
    });
  });


  //-----------------scroll icon-picture-------------------

  // Класс обеспечивает скролл страницы к определенным объектам на ней
  // при клике на иконки

  class ScrollIconPicture {
    constructor() {
      this.numHead = 1;
      this.numText = 1;
      this.headDescrPict = document.querySelectorAll('.head-pd-descr');
      this.DescrPict = document.querySelectorAll('.text');
      this.updownElem1 = document.querySelector('.pct1');
      this.updownElem2 = document.querySelector('.pct2');
      this.updownElem3 = document.querySelector('.pct3');
      this.hiddenElement1 = document.querySelector('.phoneDescr');
      this.hiddenElement2 = document.querySelector('.laptopDescr');
      this.hiddenElement3 = document.querySelector('.watchDescr');

      this.descrProdPict = {
        head1: ['Iphone 12 Pro Max'],
        head2: ['Apple Watch Series 6'],
        head3: ['Macbook Pro M1'],
        descr1: [
          `The iPhone 12 Pro features a 6.1-inch display and
      the larger iPhone 12 Pro Max variant features a <br>
      6.7-inch display. Both models have the Super Retina XDR 
      OLED display with thinner 
      bezels than previous generation 
      iPhones. The iPhone 12 Pro Max features 
      the largest display on any iPhone
      to date. The phones also introduce a 
      new glass-ceramic covering, named
      'Ceramic Shield', which was co-developed 
      with Corning Inc. Apple claims the Ceramic Shield has 
      '4 times better drop performance' and that it is 
      'tougher than any smartphone glass'.`,
        ],
        descr2: [
          `Cupertino, California — Apple today announced 
      Apple Watch Series 6,introducing a revolutionary 
      Blood Oxygen feature that offers users 
      even more insight into their overall wellness. 
      Apple Watch Series 6delivers many notable hardware 
      improvements, including a faster S6
      System in Package (SiP) and next-generation 
      always-on altimeter, along with its most colorful
      lineup yet, featuring a beautiful 
      palette of new case finishes and bands. 
      watchOS 7 brings Family Setup, sleep tracking, 
      automatic handwashing detection, new workout
      types, and the ability to curate and share watch
      faces, encouraging customers to be more active,
      stay connected, and better manage their
      health in new ways.`,
        ],
        descr3: [
          `Apple MacBook Pro is a macOS laptop with a 
      13.30-inch display that has
      a resolution of 2560x1600 pixels. It is 
      powered by a Core i5 processor
      and it comes with 12GB of RAM. The Apple 
      MacBook Pro packs 512GB of SSD
      storage. Connectivity options include 
      Wi - Fi 802.11 ac, Bluetooth 
      and it comes with 2 USB ports(2 x USB 3.0), 
      Mic In ports. As of 14th 
      April 2021, Apple MacBook Pro price in 
      India starts at Rs. 159, 900. 
      That compared to the cheaper MacBook Air, 
      the chips used in the Air 
      are older than those in the MacBook, not 
      to mention the high-resolution
      innovative display and design of the 
      more upscale MacBook.`,
        ],
      };

      this.hidElem = [
        this.hiddenElement1,
        this.hiddenElement2,
        this.hiddenElement3,
      ];
      this.upDownElem = [this.updownElem1, this.updownElem2, this.updownElem3];
    }

    handleButtonClick(elem) {
      elem.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return true;
    }
  }

  const scrollWin = new ScrollIconPicture();

  for (const elem of scrollWin.headDescrPict) {
    elem.innerHTML = scrollWin.descrProdPict[`head${scrollWin.numHead++}`];
  }

  for (const elem of scrollWin.DescrPict) {
    elem.innerHTML = scrollWin.descrProdPict[`descr${scrollWin.numText++}`];
  }

  scrollWin.upDownElem.map(elem => {
    elem.addEventListener('click', () => {
      scrollWin.handleButtonClick(
        scrollWin.hidElem[scrollWin.upDownElem.indexOf(elem)]
      );
    });
  });
});
