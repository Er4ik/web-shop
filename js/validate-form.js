const formValidation = document.querySelector('.formValid');
const signMenuButs = formValidation.querySelectorAll('.in-but');
const buttonNameForm = formValidation.querySelector('.in-name-but');
const buttonEmailForm = formValidation.querySelector('.in-email-but');
const buttonPasswordForm = formValidation.querySelector('.in-pass-but');

const emailrx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
const namerx = /\w \w/;
const minimum8Chars = /^.{8,}$/
const beginWithoutDigit = /^\D.*$/
const withoutSpecialChars = /^[^-() /]*$/
const containsLetters = /^.*[a-zA-Z]+.*$/

const checkDataFields = () => {
    for (var i = 0; i < signMenuButs.length; i++) {
        if (!signMenuButs[i].value) {
            signMenuButs[i].style.outline = '1.5px solid red';
        } else {
            signMenuButs[i].style.outline = '';
        }
    }
}

function checkingValidity(button, rx){
    if (!rx.test(button.value)) {
        button.style.outline = '1.5px solid red';
    }
}

formValidation.addEventListener('submit', (event) => {
    event.preventDefault()
    checkDataFields();
    checkingValidity(buttonEmailForm, emailrx);
    checkingValidity(buttonNameForm, namerx);
    checkingValidity(buttonPasswordForm, minimum8Chars);
    checkingValidity(buttonPasswordForm, beginWithoutDigit);
    checkingValidity(buttonPasswordForm, withoutSpecialChars);
    checkingValidity(buttonPasswordForm, containsLetters);
});