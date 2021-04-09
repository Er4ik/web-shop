//slider description
{
    const sliderLine = document.querySelector('.slider-line');
    const nameProd = document.querySelector('.name-descr');
    const descrProd = document.querySelector('.text-descr');
    const scrollNumber = document.querySelector('.number');
    const wheelColor1 = document.querySelector('.wh1');
    const wheelColor2 = document.querySelector('.wh2');
    const wheelColor3 = document.querySelector('.wh3');

    document.querySelector('.next').onclick = scrollNum;

    let offset = 0;
    let countNum = 1;

    scrollNumber.innerHTML = countNum;
    wheelColor1.style.backgroundColor = 'darkorange';
    nameProd.innerHTML = aboutCatalog.Head1;
    descrProd.innerHTML = aboutCatalog.Description1;

    function scrollNum() {
        countNum++;
        if (countNum > 3) countNum = 1;
        if (countNum === 1) {
            wheelColor('darkorange', 'white', 'white');
            wheelColor1.style.backgroundColor = 'darkorange';
            wheelColor2.style.backgroundColor = 'white';
            wheelColor3.style.backgroundColor =  'white';
        }
        else if (countNum === 2) {
            wheelColor('white', 'darkorange', 'white');
        } 
        else {
            wheelColor('white', 'white', 'darkorange');
        }

        let a = document.querySelector('.number').value = countNum;
        document.querySelector('.number').innerHTML = a;
        
        nameProd.innerHTML = aboutCatalog[`Head${countNum}`];
        descrProd.innerHTML = aboutCatalog[`Description${countNum}`];
        scrollPict();
    }

    const wheelColor = (clr1, clr2, clr3) => {
        wheelColor1.style.backgroundColor = clr1;
        wheelColor2.style.backgroundColor = clr2;
        wheelColor3.style.backgroundColor = clr3;
    }

    function scrollPict() {
        offset += 650;
        if (offset > 1300) offset = 0;
        sliderLine.style.left = -offset + 'px';
    }
}

