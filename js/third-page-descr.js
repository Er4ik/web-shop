{
    const serviceHead = document.querySelector('.head-serv1');
    const serviceDescr = document.querySelector('.descr-serv2');

    serviceHead.innerHTML = aboutService.HeadServ1;
    serviceDescr.innerHTML = aboutService.DescrServ1;

    document.querySelector('.s1').addEventListener('click', function() {
        changeData('Serv1')
    });

    document.querySelector('.s2').addEventListener('click', function () {
        changeData('Serv2')
    });

    document.querySelector('.s3').addEventListener('click', function () {
        changeData('Serv3')
    });

    function changeData(serv) {
        serviceHead.innerHTML = aboutService[`Head${serv}`];
        serviceDescr.innerHTML = aboutService[`Descr${serv}`];
    };
}
