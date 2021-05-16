//slider catalog
{
    const plusCat = document.querySelector('.plusCat');
    const catDescr = document.querySelector('.catDescr');


    catDescr.classList.add('p-show');
    catDescr.style.display = 'none';
    let openCat = true;

    function showCatalog(disp, transform, colour, opac, flag) {
        catDescr.style.display = disp;
        plusCat.style.transform = transform;
        plusCat.style.color = colour;
        plusCat.style.opacity = opac;
        openCat = flag;
        return true;
    }

    const showCat = () => {
        if (openCat === false) {
            showCatalog('none', 'rotate(-180deg)', 'white', 0.3, true);
        } else {
            showCatalog('flex', 'rotate(225deg)', 'darkorange', 1, false);
        }
    }

    plusCat.addEventListener('click', showCat);
}

//slider description
{
    const sliderLine = document.querySelector('.slider-line');
    const nameProd = document.querySelector('.name-descr');
    const descrProd = document.querySelector('.text-descr');
    const scrollNumber = document.querySelector('.number');
    const wheelColor1 = document.querySelector('.wh1');
    const wheelColor2 = document.querySelector('.wh2');
    const wheelColor3 = document.querySelector('.wh3');

    let offset = 0;
    let countNum = 1;

    scrollNumber.innerHTML = countNum;
    wheelColor1.style.backgroundColor = 'darkorange';
    nameProd.innerHTML = aboutCatalog.Head1;
    descrProd.innerHTML = aboutCatalog.Description1;

    const changeDataPict = (count) => {
        if (count in aboutCatalog) {
            nameProd.innerHTML = aboutCatalog[`Head${count}`];
            descrProd.innerHTML = aboutCatalog[`Description${count}`];
            return true;
        } else {
            aboutCatalog.count = '';
            return false;
        }
    }

    const changeNum = (count) => {
        let a = document.querySelector('.number').value = count;
        document.querySelector('.number').innerHTML = a;
    }

    const wheelColor = (clr1, clr2, clr3) => {
        wheelColor1.style.backgroundColor = clr1;
        wheelColor2.style.backgroundColor = clr2;
        wheelColor3.style.backgroundColor = clr3;
        return true;
    }

    function scrollPict() {
        offset += 555;
        if (offset > 1110) offset = 0;
        sliderLine.style.left = -offset + 'px';
        return offset;
    }

    function scrollNum() {
        countNum++;
        if (countNum > 3) countNum = 1;
        if (countNum === 1) {
            wheelColor('darkorange', 'white', 'white');
        }
        else if (countNum === 2) {
            wheelColor('white', 'darkorange', 'white');
        }
        else {
            wheelColor('white', 'white', 'darkorange');
        }

        changeNum(countNum);
        scrollPict();
        changeDataPict(countNum);
        return true;
    }

    document.querySelector('.next').onclick = scrollNum;

    document.querySelector('.wh1').addEventListener('click', function () {
        countNum = 1;
        offset = -555;
        changeNum(countNum);
        scrollPict();
        changeDataPict('1');
        wheelColor('darkorange', 'white', 'white');
    });

    document.querySelector('.wh2').addEventListener('click', function () {
        countNum = 2;
        changeNum(countNum);
        offset = 0;
        scrollPict();
        changeDataPict('2');
        wheelColor('white', 'darkorange', 'white');
    });

    document.querySelector('.wh3').addEventListener('click', function () {
        countNum = 3;
        offset = 555;
        changeNum(countNum);
        scrollPict();
        changeDataPict('3');
        wheelColor('white', 'white', 'darkorange');
    });
}

// slider picture_Back_Text
{
    const prodPict1 = document.querySelector('.prod1');
    const prodPict2 = document.querySelector('.prod2');
    const prodPict3 = document.querySelector('.prod3');
    const dataBackPict1 = document.querySelector('.pictBack1');
    const dataBackPict2 = document.querySelector('.pictBack2');
    const dataBackPict3 = document.querySelector('.pictBack3');

    dataBackPict1.innerHTML = aboutProductBack.prod1;
    dataBackPict2.innerHTML = aboutProductBack.prod2;
    dataBackPict3.innerHTML = aboutProductBack.prod3;

    let flagRotate = true;

    const rotatePict = (pict) => {
        if (flagRotate) {
            pict.style.transform = 'rotateY(180deg)';
            pict.style.opacity = 0.2;
            flagRotate = false;
            return flagRotate;
        } else {
            pict.style.transform = '';
            pict.style.opacity = 1;
            flagRotate = true;
            return flagRotate;
        }
    }

    prodPict1.addEventListener('click', function () {
        rotatePict(prodPict1);
    });

    prodPict2.addEventListener('click', function () {
        rotatePict(prodPict2);
    });

    prodPict3.addEventListener('click', function () {
        rotatePict(prodPict3);
    });
}

//description service
{
    const backButton1 = document.querySelector('.serv1');
    const backButton2 = document.querySelector('.serv2');
    const backButton3 = document.querySelector('.serv3');
    const serviceHead = document.querySelector('.head-serv1');
    const serviceDescr = document.querySelector('.descr-serv2');
    const servIcon1 = document.querySelector('.serv-icon1');
    const servIcon2 = document.querySelector('.serv-icon2');
    const servIcon3 = document.querySelector('.serv-icon3');

    backButton1.style.backgroundColor = 'black';
    backButton1.style.color = 'white';

    serviceHead.innerHTML = aboutService.HeadServ1;
    serviceDescr.innerHTML = aboutService.DescrServ1;
    servIcon2.style.display = 'none';
    servIcon3.style.display = 'none';

    const backBut = (clrBack1, clrBack2, clrBack3, clrFont1, clrFont2, clrFont3) => {
        backButton1.style.backgroundColor = clrBack1;
        backButton2.style.backgroundColor = clrBack2;
        backButton3.style.backgroundColor = clrBack3;
        backButton1.style.color = clrFont1;
        backButton2.style.color = clrFont2;
        backButton3.style.color = clrFont3;
        return true;
    }

    function changeData(serv) {
        if (serv in aboutService) {
            serviceHead.innerHTML = aboutService[`Head${serv}`];
            serviceDescr.innerHTML = aboutService[`Descr${serv}`];
            return true;
        }
        return false;
    };

    function servIconVisible(vis1, vis2, vis3) {
        servIcon1.style.display = vis1;
        servIcon2.style.display = vis2;
        servIcon3.style.display = vis3;
        return true;
    }

    document.querySelector('.s1').addEventListener('click', function () {
        changeData('Serv1');
        backBut('black', '', '', 'white', 'black', 'black');
        servIconVisible('block', 'none', 'none');
    });

    document.querySelector('.s2').addEventListener('click', function () {
        changeData('Serv2');
        backBut('', 'black', '', 'black', 'white', 'black');
        servIconVisible('none', 'block', 'none');
    });

    document.querySelector('.s3').addEventListener('click', function () {
        changeData('Serv3');
        backBut('', '', 'black', 'black', 'black', 'white');
        servIconVisible('none', 'none', 'block');
    });
}

//scroll icon-picture
{
    const headDescrPict1 = document.querySelector('.hd1');
    const headDescrPict2 = document.querySelector('.hd2');
    const headDescrPict3 = document.querySelector('.hd3');
    const updownElem1 = document.querySelector('.pct1');
    const updownElem2 = document.querySelector('.pct2');
    const updownElem3 = document.querySelector('.pct3');
    const hiddenElement1 = document.querySelector(".phoneDescr");
    const hiddenElement2 = document.querySelector(".watchDescr");
    const hiddenElement3 = document.querySelector(".laptopDescr");
    const DescrPict1 = document.querySelector('.phone-text');
    const DescrPict2 = document.querySelector('.watch-text');
    const DescrPict3 = document.querySelector('.laptop-text');

    headDescrPict1.innerHTML = descrProdPict.head1;
    headDescrPict2.innerHTML = descrProdPict.head2;
    headDescrPict3.innerHTML = descrProdPict.head3;
    DescrPict1.innerHTML = descrProdPict.descr1;
    DescrPict2.innerHTML = descrProdPict.descr2;
    DescrPict3.innerHTML = descrProdPict.descr3;

    function handleButtonClick(elem) {
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
        return true;
    }

    updownElem1.addEventListener('click', function () {
        handleButtonClick(hiddenElement1);
    });
    updownElem3.addEventListener('click', function () {
        handleButtonClick(hiddenElement2);
    });
    updownElem2.addEventListener('click', function () {
        handleButtonClick(hiddenElement3);
    });
}

//animate-scroll-picture
{
    const phoneDescr = document.querySelector('.phoneDescr');
    const watchDescr = document.querySelector('.watchDescr');
    const laptopDescr = document.querySelector('.laptopDescr');
    
    window.addEventListener('scroll', function () {
        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            phoneDescr.classList.add('showObj');
            watchDescr.classList.add('showObj');
            laptopDescr.classList.add('showObj');
            return true;
        } else {
            let scrollTop = window.scrollY;
            if ((scrollTop >= 1500) && (scrollTop <= 3100)) phoneDescr.classList.add('showObj');
            if ((scrollTop >= 2300) && (scrollTop <= 4000)) watchDescr.classList.add('showObj');
            if ((scrollTop >= 3100) && (scrollTop <= 5200)) laptopDescr.classList.add('showObj');
            return true;
        }
    });
}

