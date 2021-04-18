const phoneDescr = document.querySelector('.phoneDescr');
const watchDescr = document.querySelector('.watchDescr');
const laptopDescr = document.querySelector('.laptopDescr');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    (scrollTop >= 1800) && (scrollTop <= 3000) ? phoneDescr.classList.add('showObj') : phoneDescr.classList.remove('showObj');
    (scrollTop >= 2500) && (scrollTop <= 3800) ? watchDescr.classList.add('showObj') : watchDescr.classList.remove('showObj');
    (scrollTop >= 3400) && (scrollTop <= 5000) ? laptopDescr.classList.add('showObj') : laptopDescr.classList.remove('showObj');
});

