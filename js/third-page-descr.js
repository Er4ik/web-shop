//description service
{
    const backButton1 = document.querySelector('.serv1')
    const backButton2 = document.querySelector('.serv2')
    const backButton3 = document.querySelector('.serv3')
    const serviceHead = document.querySelector('.head-serv1');
    const serviceDescr = document.querySelector('.descr-serv2');

    backButton1.style.backgroundColor = 'black';
    backButton1.style.color = 'white';

    serviceHead.innerHTML = aboutService.HeadServ1;
    serviceDescr.innerHTML = aboutService.DescrServ1;

    document.querySelector('.s1').addEventListener('click', function() {
        changeData('Serv1');
        backButton1.style.backgroundColor = 'black';
        backButton2.style.backgroundColor = '';
        backButton3.style.backgroundColor = '';
        backButton1.style.color = 'white';
        backButton2.style.color = 'darkorange';
        backButton3.style.color = 'darkorange';
        
    });

    document.querySelector('.s2').addEventListener('click', function () {
        changeData('Serv2');
        backButton1.style.backgroundColor = '';
        backButton2.style.backgroundColor = 'black';
        backButton3.style.backgroundColor = '';
        backButton1.style.color = 'darkorange';
        backButton2.style.color = 'white';
        backButton3.style.color = 'darkorange';
    });

    document.querySelector('.s3').addEventListener('click', function () {
        changeData('Serv3');
        backButton1.style.backgroundColor = '';
        backButton2.style.backgroundColor = '';
        backButton3.style.backgroundColor = 'black';
        backButton1.style.color = 'darkorange';
        backButton2.style.color = 'darkorange';
        backButton3.style.color = 'white';
    });

    function changeData(serv) {
        serviceHead.innerHTML = aboutService[`Head${serv}`];
        serviceDescr.innerHTML = aboutService[`Descr${serv}`];
    };
}



