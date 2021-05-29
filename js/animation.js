//slider catalog
{
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
            if (!this.flag) {
                return this.showCatalog('none', 'rotate(-180deg)', 'white', 0.3, true);
            }
            return this.showCatalog('flex', 'rotate(225deg)', 'darkorange', 1, false);
        }
    }

    const slider = new SliderCatalog(true);

    slider.plusCat.addEventListener('click', function() {
        slider.showCat();
    });
}

//slider description
{
    class SliderProd {
        constructor(offset, countNum) {
            this.sliderLine = document.querySelector('.slider-line');
            this.nameProd = document.querySelector('.name-descr');
            this.descrProd = document.querySelector('.text-descr');
            this.scrollNumber = document.querySelector('.number');
            this.wheelColor1 = document.querySelector('.wh1');
            this.wheelColor2 = document.querySelector('.wh2');
            this.wheelColor3 = document.querySelector('.wh3');

            this.whColor = [this.wheelColor1, this.wheelColor2, this.wheelColor3];
            this.changeWh1 = [1, -555, ['darkorange', 'white', 'white']];
            this.changeWh2 = [2, 0, ['white', 'darkorange', 'white']];
            this.changeWh3 = [3, 555, ['white', 'white', 'darkorange']];
            this.changeWh = [this.changeWh1, this.changeWh2, this.changeWh3];

            this.offset = offset;
            this.countNum = countNum;
            this.scrollNumber.innerHTML = this.countNum;
            this.wheelColor1.style.backgroundColor = 'darkorange';
            this.nameProd.innerHTML = aboutCatalog.Head1;
            this.descrProd.innerHTML = aboutCatalog.Description1;
        }

        changeDataPict = (count) => {
            if (`Head${count}` in aboutCatalog) {
                this.nameProd.innerHTML = aboutCatalog[`Head${count}`];
                this.descrProd.innerHTML = aboutCatalog[`Description${count}`];
                return true;
            } else {
                aboutCatalog[`Head${count}`] = '';
                return false;
            }
        }

        changeNum = (count) => {
            let a = document.querySelector('.number').value = count;
            document.querySelector('.number').innerHTML = a;
        }

        wheelColorChange = (clr1, clr2, clr3) => {
            this.wheelColor1.style.backgroundColor = clr1;
            this.wheelColor2.style.backgroundColor = clr2;
            this.wheelColor3.style.backgroundColor = clr3;
            return true;
        }

        scrollPict() {
            this.offset += 555;
            if (this.offset > 1110) this.offset = 0;
            this.sliderLine.style.left = -this.offset + 'px';
            return this.offset;
        }

        scrollNum() {
            this.countNum++;
            if (this.countNum > 3) this.countNum = 1;
            if (this.countNum === 1) {
                this.wheelColorChange('darkorange', 'white', 'white');
            }
            else if (this.countNum === 2) {
                this.wheelColorChange('white', 'darkorange', 'white');
            }
            else {
                this.wheelColorChange('white', 'white', 'darkorange');
            }
            this.changeNum(this.countNum);
            this.scrollPict();
            this.changeDataPict(this.countNum);
            return true;
        }

        changeWheel = (num, off, color) => {
            this.countNum = num;
            this.offset = off;
            this.changeNum(this.countNum);
            this.scrollPict();
            this.changeDataPict(this.countNum);
            this.wheelColorChange(...color);
        }
    }
    
    const change = new SliderProd(0, 1);

    document.querySelector('.next').addEventListener('click', function() {
        change.scrollNum();
    });

    change.whColor.map(function(elem) {
        elem.addEventListener('click', function () {
            change.changeWheel(...change.changeWh[change.whColor.indexOf(elem)]);
        });
    })
}

// slider picture_Back_Text
{
    class RotPict {
        constructor(flag) {
            this.prodPict = document.querySelectorAll('.product-picture');
            this.dataBackPict1 = document.querySelector('.pictBack1');
            this.dataBackPict2 = document.querySelector('.pictBack2');
            this.dataBackPict3 = document.querySelector('.pictBack3');

            this.flagRotate = flag;
            this.dataBackPict1.innerHTML = aboutProductBack.prod1;
            this.dataBackPict2.innerHTML = aboutProductBack.prod2;
            this.dataBackPict3.innerHTML = aboutProductBack.prod3;
        }

        conditionForRetutrn = (picture, rotate, flag, num) => {
            picture.style.transform = rotate;
            picture.style.opacity = num;
            this.flagRotate = flag;
            return this.flagRotate;
        }

        rotatePict = (pict) => {
            if (pict.style.opacity == 0.2) this.flagRotate = false;
            else this.flagRotate = true;
            if (this.flagRotate) {
                this.conditionForRetutrn(pict, 'rotateY(180deg)', false, 0.2);
            } else {
                this.conditionForRetutrn(pict, '', true, 1);
            }
        }
    }

    const rotatePicture = new RotPict(true);

    rotatePicture.prodPict.forEach((elem) => {
        elem.addEventListener('click', function () {
            rotatePicture.rotatePict(elem);
        });
    })
}

//description service
{

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

            this.backButton1.style.backgroundColor = 'black';
            this.backButton1.style.color = 'white';
            this.serviceHead.innerHTML = aboutService.HeadServ1;
            this.serviceDescr.innerHTML = aboutService.DescrServ1;
            this.servIcon2.style.display = 'none';
            this.servIcon3.style.display = 'none';
        }

        backBut = (clrBack1, clrBack2, clrBack3, clrFont1, clrFont2, clrFont3) => {
            this.backButton1.style.backgroundColor = clrBack1;
            this.backButton2.style.backgroundColor = clrBack2;
            this.backButton3.style.backgroundColor = clrBack3;
            this.backButton1.style.color = clrFont1;
            this.backButton2.style.color = clrFont2;
            this.backButton3.style.color = clrFont3;
            return true;
        }

        changeData(serv) {
        if ([`Head${serv}`] in aboutService) {
            this.serviceHead.innerHTML = aboutService[`Head${serv}`];
            this.serviceDescr.innerHTML = aboutService[`Descr${serv}`];
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

        changeDescrService = (data, but, visible) => {
            this.changeData(data);
            this.backBut(...but);
            this.servIconVisible(...visible);
        }

        bodyValue = {
            'but': ['.s1', '.s2', '.s3'],
            'valArr1': ['Serv1', ['black', '', '', 'white', 'black', 'black'], ['block', 'none', 'none']],
            'valArr2': ['Serv2', ['', 'black', '', 'black', 'white', 'black'], ['none', 'block', 'none']],
            'valArr3': ['Serv3', ['', '', 'black', 'black', 'black', 'white'], ['none', 'none', 'block']],
        }
    }

    const desrcServ = new ServiceDesrc;

    desrcServ.bodyValue.but.map(function (elem) {
        document.querySelector(elem).addEventListener('click', function () {
            desrcServ.changeDescrService(...desrcServ.bodyValue[`valArr${desrcServ.bodyValue.but.indexOf(elem)+1}`]);
        })
    })
}

//scroll icon-picture
{
    class ScrollIconPicture {
        constructor() {
            this.numHead = 1;
            this.numText = 1;
            this.headDescrPict = document.querySelectorAll('.head-pd-descr')
            this.DescrPict = document.querySelectorAll('.text')
            this.updownElem1 = document.querySelector('.pct1');
            this.updownElem2 = document.querySelector('.pct2');
            this.updownElem3 = document.querySelector('.pct3');
            this.hiddenElement1 = document.querySelector(".phoneDescr");
            this.hiddenElement2 = document.querySelector(".laptopDescr");
            this.hiddenElement3 = document.querySelector(".watchDescr");

            this.hidElem = [this.hiddenElement1, this.hiddenElement2, this.hiddenElement3];
            this.upDownElem = [this.updownElem1, this.updownElem2, this.updownElem3];
        }

        handleButtonClick(elem) {
            elem.scrollIntoView({ block: "center", behavior: "smooth" });
            return true;
        }

    }

    const scrollWin = new ScrollIconPicture;

    scrollWin.headDescrPict.forEach((elem) => {
        elem.innerHTML = descrProdPict[`head${scrollWin.numHead++}`];
    })

    scrollWin.DescrPict.forEach((elem) => {
        elem.innerHTML = descrProdPict[`descr${scrollWin.numText++}`];
    })

    scrollWin.upDownElem.map(function(elem) {
        elem.addEventListener('click', function () {
            scrollWin.handleButtonClick(scrollWin.hidElem[scrollWin.upDownElem.indexOf(elem)]);
        });
    })
}

//animate-scroll-picture
{
    class AnimationScrollVisible {
        constructor() {
            this.phoneDescr = document.querySelector('.phoneDescr');
            this.watchDescr = document.querySelector('.watchDescr');
            this.laptopDescr = document.querySelector('.laptopDescr');
        }

        scrollPage = () => {
            let windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                this.phoneDescr.classList.add('showObj');
                this.watchDescr.classList.add('showObj');
                this.laptopDescr.classList.add('showObj');
                return true;
            } else {
                let scrollTop = window.scrollY;
                if ((scrollTop >= 1500) && (scrollTop <= 3100)) this.phoneDescr.classList.add('showObj');
                if ((scrollTop >= 2300) && (scrollTop <= 4000)) this.watchDescr.classList.add('showObj');
                if ((scrollTop >= 3100) && (scrollTop <= 5200)) this.laptopDescr.classList.add('showObj');
                return true;
            }
        }
    }

    const scrollToPict = new AnimationScrollVisible;
    
    window.addEventListener('scroll', function () {
        scrollToPict.scrollPage();
    });
}
