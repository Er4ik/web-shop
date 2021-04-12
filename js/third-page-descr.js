//description service
{
    const backButton1 = document.querySelector('.serv1');
    const backButton2 = document.querySelector('.serv2');
    const backButton3 = document.querySelector('.serv3');
    const serviceHead = document.querySelector('.head-serv1');
    const serviceDescr = document.querySelector('.descr-serv2');
    const servIcon1 = document.querySelector('.serv-icon1');
    const servIcon2 = document.querySelector('.serv-icon2');
    const servIcon3 = document.querySelector('.serv-icon3'); 

    backButton1.style.backgroundColor = 'black';
    backButton1.style.color = 'white';

    serviceHead.innerHTML = aboutService.HeadServ1;
    serviceDescr.innerHTML = aboutService.DescrServ1;
    servIcon2.style.display = 'none';
    servIcon3.style.display = 'none';

    const backBut = (clrBack1, clrBack2, clrBack3, clrFont1, clrFont2, clrFont3) => {
        backButton1.style.backgroundColor = clrBack1;
        backButton2.style.backgroundColor = clrBack2;
        backButton3.style.backgroundColor = clrBack3;
        backButton1.style.color = clrFont1;
        backButton2.style.color = clrFont2;
        backButton3.style.color = clrFont3;
    }

    function changeData(serv) {
        serviceHead.innerHTML = aboutService[`Head${serv}`];
        serviceDescr.innerHTML = aboutService[`Descr${serv}`];
    };

    function servIconVisible(vis1, vis2, vis3) {
        servIcon1.style.display = vis1;
        servIcon2.style.display = vis2;
        servIcon3.style.display = vis3;
    }

    document.querySelector('.s1').addEventListener('click', function() {
        changeData('Serv1');
        backBut('black', '', '', 'white', 'black', 'black');
        servIconVisible('block', 'none', 'none');
    });

    document.querySelector('.s2').addEventListener('click', function () {
        changeData('Serv2');
        backBut('', 'black', '', 'black', 'white', 'black');
        servIconVisible('none', 'block', 'none');
    });

    document.querySelector('.s3').addEventListener('click', function () {
        changeData('Serv3');
        backBut('', '', 'black', 'black', 'black', 'white');
        servIconVisible('none', 'none', 'block');
    });
}



