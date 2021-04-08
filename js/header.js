const menuIcon = document.querySelector('.menu-icon');
function toggleMenuIcon() {
    menuIcon.classList.toggle('active')
}
menuIcon.addEventListener('click', toggleMenuIcon);