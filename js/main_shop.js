const menuIcon = document.querySelector('.menu-icon');
function toggleMenuIcon() {
    menuIcon.classList.toggle('active')
}
menuIcon.addEventListener('click', toggleMenuIcon);

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.next').addEventListener('click', function () {
    offset += 650;
    if(offset > 1300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


