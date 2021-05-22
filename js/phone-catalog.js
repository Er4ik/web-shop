const icons = document.querySelectorAll('.icon img'); //массив
const positionName = document.querySelectorAll('.p-name');
const price = document.querySelectorAll('.price');
const info = document.querySelectorAll('.info');
const brand = document.querySelectorAll('.brand');
const memory = document.querySelectorAll('.memory');
const rate = document.querySelectorAll('.rate');
let eventor = true;
for (let key = 0; key < 9; key++) {
    positionName[key].innerHTML = phonesInfo[`model${key+1}`];
    price[key].innerHTML = 'Price: ' + phonesInfo[`price${key+1}`];
    brand[key].innerHTML = 'Brand: ' + phonesInfo[`brand${key+1}`];
    memory[key].innerHTML = 'Memory size: ' + phonesInfo[`memory${key+1}`];
    rate[key].innerHTML = 'Rephresh rate: ' + phonesInfo[`rate${key+1}`];
}
const Rotator = (pict, info, name) => {
    if (eventor) {
        info.style.opacity = 1;
        name.style.opacity = 1;
        pict.style.transform = 'rotateY(180deg)';
        pict.style.opacity = 0.1;
        eventor = false;
        return eventor;
    } else {
        info.style.opacity = 0;
        name.style.opacity = 0;
        pict.style.transform = "";
        pict.style.opacity = 1;
        eventor = true;
        return eventor;
    }
}

icons.forEach((icn, indx) => {
    icn.addEventListener('click', () => {
        Rotator(icn, info[indx], positionName[indx]);
    })
});