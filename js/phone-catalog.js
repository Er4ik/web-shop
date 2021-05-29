//icons-rotate
const icons = document.querySelectorAll('.icon img');
const positionName = document.querySelectorAll('.p-name');
const price = document.querySelectorAll('.price');
const info = document.querySelectorAll('.info');
const brand = document.querySelectorAll('.brand');
const memory = document.querySelectorAll('.memory');
const rate = document.querySelectorAll('.rate');
let trigger = true;
for (let key = 0; key < 9; key++) {
    positionName[key].innerHTML = phonesInfo[`model${key + 1}`];
    price[key].innerHTML = 'Price: ' + phonesInfo[`price${key + 1}`];
    brand[key].innerHTML = 'Brand: ' + phonesInfo[`brand${key + 1}`];
    memory[key].innerHTML = 'Memory size: ' + phonesInfo[`memory${key + 1}`];
    rate[key].innerHTML = 'Rephresh rate: ' + phonesInfo[`rate${key + 1}`];
}

const settings = (pict, info, name, opac, trans, opacPict) => {
    info.style.opacity = opac;
    name.style.opacity = opac;
    pict.style.transform = trans;
    pict.style.opacity = opacPict;
}

const visibleRotate = (pict, info, name) => {
    if (info.style.opacity == 0) {
        settings(pict, info, name, '1', 'rotateY(180deg)', '0.05');
    } else {
        settings(pict, info, name, 0, '', 1);
    }
}

icons.forEach((icn, indx) => {
    icn.addEventListener('click', () => {
        visibleRotate(icn, info[indx], positionName[indx]);
    })
});

//like-button
let heart = document.querySelectorAll('.like');

const setUp = (heartpic, link, opa) => {
    heartpic.src = link;
    heartpic.style.opacity = opa;
}

const likeClick = heartpic => {
    if (heartpic.style.opacity == 0.9) {
        setUp(heartpic, "pictures/product-icons/heart-clicked.png", 1)
    } else {
        setUp(heartpic, "pictures/product-icons/heart.png", 0.9)
    }
}

heart.forEach((item) => {
    item.style.opacity = 0.9;
    item.addEventListener('click', () => {
        likeClick(item);
    })
});