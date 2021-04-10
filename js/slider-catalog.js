const plusCat = document.querySelector('.plusCat');
const catalog = document.querySelector('.catalog');
const catDescr = document.querySelector('.catDescr');

catDescr.style.display = 'none';
let flag = 1;

const showCat = () => {
    if (flag === 0) {
        catDescr.style.display = 'none';
        flag = 1;
    } else {
        catDescr.style.display = 'flex';
        flag = 0;
    }
}

plusCat.addEventListener('click', showCat);
