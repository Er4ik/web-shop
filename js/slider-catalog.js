const plusCat = document.querySelector('.plusCat');
const catalog = document.querySelector('.catalog');
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
        plusCat.style.transform = 'rotate(225deg)';
        plusCat.style.color = 'darkorange'
        plusCat.style.opacity = 1;
        flag = 0;
    }
}

plusCat.addEventListener('click', showCat);
