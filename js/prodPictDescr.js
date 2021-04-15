const headDescrPict1 = document.querySelector('.hd1');
const headDescrPict2 = document.querySelector('.hd2');
const headDescrPict3 = document.querySelector('.hd3');
const updownElem1 = document.querySelector('.pct1');
const updownElem2 = document.querySelector('.pct2');
const updownElem3 = document.querySelector('.pct3');
const DescrPict1 = document.querySelector('.phone-text');
const DescrPict2 = document.querySelector('.watch-text');
const DescrPict3 = document.querySelector('.laptop-text');

headDescrPict1.innerHTML = descrProdPict.head1;
headDescrPict2.innerHTML = descrProdPict.head2;
headDescrPict3.innerHTML = descrProdPict.head3;
DescrPict1.innerHTML = descrProdPict.descr1;
DescrPict2.innerHTML = descrProdPict.descr2;
DescrPict3.innerHTML = descrProdPict.descr3;

let pageYLabel = 0;

updownElem1.onclick = function () {
    let pageY = window.pageYOffset;
    if (this.className === 'pct1') {
        pageYLabel = pageY;
        window.scrollTo(0, 2400);
        this.className = 'pct1';
    }
}

updownElem2.onclick = function () {
    let pageY = window.pageYOffset;
    if (this.className === 'pct2') {
        pageYLabel = pageY;
        window.scrollTo(0, 3950);
        this.className = 'pct2';
    }
}

updownElem3.onclick = function () {
    let pageY = window.pageYOffset;
        if (this.className === 'pct3') {
        pageYLabel = pageY;
        window.scrollTo(0, 3150);
        this.className = 'pct3';
    }
}
