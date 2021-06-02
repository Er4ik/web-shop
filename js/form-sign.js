"use strict";

class SignMenuForm {
  constructor(url, flag) {
    this.flagPassView = flag;
    this.url = url;

    this.submitForm = document.querySelector(".sign-menu-form");
    this.inName = document.querySelector(".ni1");
    this.inEmail = document.querySelector(".ni2");
    this.inPassword = document.querySelector(".ni3");
    this.inPasswordCorrect = document.querySelector(".ni4");
    this.viewPassword = document.querySelector(".view");
    this.viewRepeatPassword = document.querySelector(".viewRep");

    this.inName.setAttribute("maxlength", "30");
    this.inPassword.setAttribute("maxlength", "30");
    this.inPasswordCorrect.setAttribute("maxlength", "30");

    this.emailrx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    this.namerx = /\w \w/;
    this.minimum8Chars = /^.{8,}$/;
  }

  validateForm = (inBut, rx) => {
    if (!rx.test(inBut.value)) {
      inBut.style.border = "1px solid red";
      return false;
    }
    inBut.style.border = "4px solid rgb(236, 236, 236)";
    return true;
  };

  validPassword = (passBut, passRepeat) => {
    return passBut.value === passRepeat.value;
  };

  view = (pass, viewBut, type, src, heigth, flag) => {
    pass.type = type;
    viewBut.src = src;
    viewBut.style.height = heigth;
    this.flagPassView = flag;
    return flag;
  };

  viewPass = (pass, viewBut) => {
    if (this.flagPassView) {
      this.view(
        pass,
        viewBut,
        "text",
        "pictures/sign-icon/viewclose.jpg",
        "22px",
        false
      );
    } else {
      this.view(
        pass,
        viewBut,
        "password",
        "pictures/sign-icon/viewopen.jpg",
        "18px",
        true
      );
    }
  };

  encryptionPass = (num) => {
    this.passCipher = signForm.inPassword.value.split("");
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

    this.passCipher = this.passArrCipher.join("");
    return this.passCipher;
  };
}

const signForm = new SignMenuForm(
  "https://er4ik.github.io/Web_Site_Shop/",
  true
);

signForm.viewPassword.addEventListener("click", function () {
  signForm.viewPass(signForm.inPassword, signForm.viewPassword);
});

signForm.viewRepeatPassword.addEventListener("click", function () {
  signForm.viewPass(signForm.inPasswordCorrect, signForm.viewRepeatPassword);
});

signForm.submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (signForm.validateForm(signForm.inName, signForm.namerx) && signForm.validateForm(signForm.inEmail, signForm.emailrx) && ЁsignForm.validateForm(signForm.inPassword, signForm.minimum8Chars) && signForm.validPassword(signForm.inPassword, signForm.inPasswordCorrect)) {
    const dataPerson = {
      name: signForm.inName.value,
      email: signForm.inEmail.value,
      password: signForm.inPassword.value,
      passwordCipher: signForm.encryptionPass(8),
    };

    const requestForm = new XMLHttpRequest();
    requestForm.open("GET", signForm.url);
    requestForm.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    requestForm.send();

    for (let key in dataPerson) {
      console.dir(key + ": " + dataPerson[key]);
    }
  }
});
