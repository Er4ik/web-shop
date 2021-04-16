//slider catalog
{
    const plusCat = document.querySelector('.plusCat');
    const catDescr = document.querySelector('.catDescr');

    catDescr.style.display = 'none';
    let flag = 1;

    const showCat = () => {
        if (flag === 0) {
            catDescr.style.display = 'none';
            plusCat.style.transform = 'rotate(-180deg)';
            plusCat.style.color = 'white';
            plusCat.style.opacity = 0.3;
            flag = 1;
        } else {
            catDescr.style.display = 'flex';
            catDescr.classList.add('p-show');
            plusCat.style.transform = 'rotate(225deg)';
            plusCat.style.color = 'darkorange'
            plusCat.style.opacity = 1;
            flag = 0;
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
        nameProd.innerHTML = aboutCatalog[`Head${count}`];
        descrProd.innerHTML = aboutCatalog[`Description${count}`];
    }

    const changeNum = (count) => {
        let a = document.querySelector('.number').value = count;
        document.querySelector('.number').innerHTML = a;
    }

    const wheelColor = (clr1, clr2, clr3) => {
        wheelColor1.style.backgroundColor = clr1;
        wheelColor2.style.backgroundColor = clr2;
        wheelColor3.style.backgroundColor = clr3;
    }

    function scrollPict() {
        offset += 555;
        if (offset > 1110) offset = 0;
        sliderLine.style.left = -offset + 'px';
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

    let flag1 = 1;

    const rotatePict = (pict) => {
        if (flag1 === 1) {
            pict.style.transform = 'rotateY(180deg)';
            pict.style.opacity = 0.2;
            flag1 = 0;
        } else {
            pict.style.transform = '';
            pict.style.opacity = 1;
            flag1 = 1;
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
