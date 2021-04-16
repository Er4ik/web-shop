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

//scroll icon-picture
{
    const headDescrPict1 = document.querySelector('.hd1');
    const headDescrPict2 = document.querySelector('.hd2');
    const headDescrPict3 = document.querySelector('.hd3');
    const updownElem1 = document.querySelector('.pct1');
    const updownElem2 = document.querySelector('.pct2');
    const updownElem3 = document.querySelector('.pct3');
    const hiddenElement1 = document.querySelector(".phoneDescr");
    const hiddenElement2 = document.querySelector(".watchDescr");
    const hiddenElement3 = document.querySelector(".laptopDescr");
    const DescrPict1 = document.querySelector('.phone-text');
    const DescrPict2 = document.querySelector('.watch-text');
    const DescrPict3 = document.querySelector('.laptop-text');

    headDescrPict1.innerHTML = descrProdPict.head1;
    headDescrPict2.innerHTML = descrProdPict.head2;
    headDescrPict3.innerHTML = descrProdPict.head3;
    DescrPict1.innerHTML = descrProdPict.descr1;
    DescrPict2.innerHTML = descrProdPict.descr2;
    DescrPict3.innerHTML = descrProdPict.descr3;

    function handleButtonClick(elem) {
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    updownElem1.addEventListener('click', function () {
        handleButtonClick(hiddenElement1);
    });
    updownElem3.addEventListener('click', function () {
        handleButtonClick(hiddenElement2);
    });
    updownElem2.addEventListener('click', function(){
        handleButtonClick(hiddenElement3);
    });
}


