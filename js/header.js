// burger-menu
{
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

    burger.addEventListener('click', function() {
        but.classList.add('b-show');
    });

    function openSignMenu() {
        if (flagMenu === 0) {
            signMenu.style.display = 'flex';
            flagMenu = 1;
        }
        else {
            signMenu.style.display = 'none';
            flagMenu = 0;
        }
    }

    menuIcon.addEventListener('click', toggleMenuIcon);
    signMenuBut.addEventListener('click', openSignMenu);
    escSignMenu.addEventListener('click', openSignMenu);
}

