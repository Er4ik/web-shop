const nameProd = document.querySelector('.name-descr');
const descrProd = document.querySelector('.text-descr')
const scrollNumber = document.querySelector('.number');
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.next').onclick = scrollNum;

let countNum = 1;
let offset = 0;

scrollNumber.innerHTML = countNum;
nameProd.innerHTML = aboutCatalog.Head1;
descrProd.innerHTML = aboutCatalog.Description1;

function scrollNum() {
    countNum++;
    if (countNum > 3) countNum = 1;
    let a = document.querySelector('.number').value = countNum;
    document.querySelector('.number').innerHTML = a;
    
    nameProd.innerHTML = aboutCatalog[`Head${countNum}`];
    descrProd.innerHTML = aboutCatalog[`Description${countNum}`];
}

document.querySelector('.next').addEventListener('click', function () {
    offset += 650;
    if (offset > 1300) offset = 0;
    sliderLine.style.left = -offset + 'px';
});



