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
    if(flag1 === 1) {
        pict.style.transform = 'rotateY(180deg)';
        pict.style.opacity = 0.2;
        flag1 = 0;
    } else {
        pict.style.transform = '';
        pict.style.opacity = 1;
        flag1 = 1;
    }
}

prodPict1.addEventListener('click', function() {
    rotatePict(prodPict1);
});

prodPict2.addEventListener('click', function () {
    rotatePict(prodPict2);
});

prodPict3.addEventListener('click', function () {
    rotatePict(prodPict3);
});