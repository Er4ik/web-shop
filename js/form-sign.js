'use strict';

class SignMenuForm {
  constructor(url, flag) {
    this.flagPassView = flag;
    this.url = url;

    this.submitForm = document.querySelector('.sign-menu-form');
    this.inName = document.querySelector('.ni1');
    this.inEmail = document.querySelector('.ni2');
    this.inPassword = document.querySelector('.ni3');
    this.inPasswordCorrect = document.querySelector('.ni4');
    this.viewPassword = document.querySelector('.view');
    this.viewRepeatPassword = document.querySelector('.viewRep');
    this.names = [this.inName, this.inEmail, this.inPassword];

    this.inName.setAttribute('maxlength', '30');
    this.inPassword.setAttribute('maxlength', '30');
    this.inPasswordCorrect.setAttribute('maxlength', '30');

    this.namerx = /\w \w/;
    this.emailrx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    this.minimum8Chars = /^.{8,}$/;
    this.regx = [this.namerx, this.emailrx, this.minimum8Chars];
  }

  validateForm(inBut, rx) {
    if (!rx.test(inBut.value)) {
      inBut.style.border = '1px solid red';
      return false;
    }
    inBut.style.border = '4px solid rgb(236, 236, 236)';
    return true;
  }

  validPassword(passBut, passRepeat) {
    return (passBut.value === passRepeat.value);
  }

  view(pass, viewBut, type, src, heigth, flag) {
    pass.type = type;
    viewBut.src = src;
    viewBut.style.height = heigth;
    this.flagPassView = flag;
    return flag;
  }

  viewPass(pass, viewBut) {
    if (this.flagPassView) {
      this.view(
        pass,
        viewBut,
        'text',
        'pictures/sign-icon/viewclose.jpg',
        '22px',
        false
      );
    } else {
      this.view(
        pass,
        viewBut,
        'password',
        'pictures/sign-icon/viewopen.jpg',
        '18px',
        true
      );
    }
  }

  encryptionPass(num) {
    this.passCipher = this.inPassword.value.split('');
    this.passArrCipher = [];
    for (this.item in this.passCipher) {
      this.passArrCipher.push(this.passCipher[this.item].charCodeAt(0));
    }

    for (this.item in this.passArrCipher) {
      this.passArrCipher[this.item] += num;
      this.passArrCipher[this.item] = String.fromCharCode(
        this.passArrCipher[this.item]
      );
    }

    this.passCipher = this.passArrCipher.join('');
    return this.passCipher;
  }

  saveToLocalStorage(value) {
    localStorage.setItem('PersonalData', JSON.stringify(value));
  }

  randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  validation(pass, passRep) {
    pass.addEventListener('click', () => {
      this.viewPass(this.inPassword, this.viewPassword);
    });

    passRep.addEventListener('click', () => {
      this.viewPass(this.inPasswordCorrect, this.viewRepeatPassword);
    });
  }
}

//main

const signForm = new SignMenuForm(
  'https://er4ik.github.io/Web_Site_Shop/',
  true
);

signForm.submitForm.addEventListener('submit', event => {
  event.preventDefault();

  signForm.validation(signForm.viewPassword, signForm.viewRepeatPassword);

  const flagRx = signForm.names.map(item => {
    signForm.validateForm(item,
      signForm.regx[signForm.names.indexOf(item)]);
  });

  const flagVal = signForm.validPassword(signForm.inPassword,
    signForm.inPasswordCorrect);

  if (flagRx && flagVal) {

    const dataPerson = {
      name: signForm.inName.value,
      email: signForm.inEmail.value,
      password: signForm.inPassword.value,
      passwordCipher: signForm.encryptionPass(signForm.randomInteger(5, 10)),
    };

    signForm.saveToLocalStorage(dataPerson);

    const requestForm = new XMLHttpRequest();
    requestForm.open('GET', signForm.url);
    requestForm.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    requestForm.send();

    for (const key in dataPerson) {
      console.dir(key + ': ' + dataPerson[key]);
    }
  }
});
