// burger-menu
{
    const but = document.querySelector('.button');
    const burger = document.querySelector('.burger');
    const menuIcon = document.querySelector('.menu-icon');
    
    let flag = 0;
    burger.style.marginLeft = 1155 + 'px';
    but.style.display = 'none';
    
    function toggleMenuIcon() {
        menuIcon.classList.toggle('active');
        if (flag == 0) {
            but.style.display = 'flex';
            burger.style.marginLeft = 190 + 'px';
            flag = 1;
        } else {
            but.style.display = 'none';
            burger.style.marginLeft = 1155 + 'px';
            flag = 0;
        }
    }
    menuIcon.addEventListener('click', toggleMenuIcon);
}