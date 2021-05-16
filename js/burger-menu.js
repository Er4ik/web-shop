// burger-menu
{
    const but = document.querySelector('.button');
    const burger = document.querySelector('.burger');
    const menuIcon = document.querySelector('.menu-icon');

    let flag = true;
    burger.style.marginLeft = 1155 + 'px';

    function toggleMenuIcon() {
        menuIcon.classList.toggle('active');
        if (flag) {
            but.style.display = 'flex';
            burger.style.marginLeft = 189 + 'px';
            flag = false;
            return true;
        } else {
            but.style.display = 'none';
            burger.style.marginLeft = 1155 + 'px';
            flag = true;
            return true;
        }
    }

    burger.addEventListener('click', function () {
        but.classList.add('b-show');
    });

    menuIcon.addEventListener('click', toggleMenuIcon);
}


