const submitForm = document.querySelector('.sign-menu-form');
const inName = document.querySelector('.ni1');
const inEmail = document.querySelector('.ni2');
const inPassword = document.querySelector('.ni3');
const inPasswordCorrect = document.querySelector('.ni4');

const urlAddress = "https://er4ik.github.io/Web_Site_Shop/";

const emailrx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
const namerx = /\w \w/;
const minimum8Chars = /^.{8,}$/;

const validateForm = (inBut, rx) => {
    if(!rx.test(inBut.value)) {
        inBut.style.border = '1px solid red';
        return false;
    }
    inBut.style.border = '4px solid rgb(236, 236, 236)';
    return true;
}

const validPassword = (passBut, passRepeat) => {
    if(passBut === passRepeat) return true;
    return false;
}

submitForm.addEventListener('submit', function(event) {

    event.preventDefault();

    if(validateForm(inName, namerx) &&
    validateForm(inEmail, emailrx) &&
    validateForm(inPassword, minimum8Chars) &&
    validPassword) {

        let dataPerson = {
            'name': inName.value,
            'email': inEmail.value,
            'password': inPassword.value,
        }

        const requestForm = new XMLHttpRequest();
        requestForm.open('GET', urlAddress);
        requestForm.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        requestForm.send(dataPerson);
        for(key in dataPerson) {
            console.dir(dataPerson[key]);
        }
    }
})

