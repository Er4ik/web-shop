//about-company-page
{
    const headText = document.querySelector('.headText');
    const text = document.querySelector('.text');

    headText.innerHTML = aboutCompany.head;
    text.innerHTML = aboutCompany.text;
}

// burger-menu
{
    const mainLogo = document.querySelector('.main-log')
    const but = document.querySelector('.button');
    const burger = document.querySelector('.burger');
    const menuIcon = document.querySelector('.menu-icon');
    const signMenuBut = document.querySelector('.but-font3');
    const signMenu = document.querySelector('.sign-menu');
    const escSignMenu = document.querySelector('.esc');

    let flag = 0;
    let flagMenu = 0;
    burger.style.marginLeft = 1155 + 'px';

    function toggleMenuIcon() {
        menuIcon.classList.toggle('active');
        if (flag == 0) {
            but.style.display = 'flex';
            burger.style.marginLeft = 189 + 'px';
            flag = 1;
        } else {
            but.style.display = 'none';
            burger.style.marginLeft = 1155 + 'px';
            flag = 0;
        }
    }

    burger.addEventListener('click', function () {
        but.classList.add('b-show');
    });

    function openSignMenu() {
        if (flagMenu === 0) {
            mainLogo.style.display = 'none';
            signMenu.style.display = 'block';
            signMenu.classList.add('b-show');
            flagMenu = 1;
        }
        else {
            mainLogo.style.display = 'block';
            signMenu.style.display = 'none';
            flagMenu = 0;
        }
    }

    menuIcon.addEventListener('click', toggleMenuIcon);
    signMenuBut.addEventListener('click', openSignMenu);
    escSignMenu.addEventListener('click', openSignMenu);
}