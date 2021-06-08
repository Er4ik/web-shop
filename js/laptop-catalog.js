'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const popupLinks = document.querySelectorAll('.popup_link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock_padding');

  let unlock = true;

  const timeout = 800;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', e => {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close_popup');
  if (popupCloseIcon.lenght > 0) {
    for (let index = 0; index < popupCloseIcon.lenght; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', e => {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      currentPopup.classList.add('open');
      currentPopup.addEventListener('click', e => {
        if (!e.target.closest('.popup_content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }
  //doUnlock to lock scroll even if new popup is opened from opened one
  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }
  //hides page scroll
  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    /*you should add class="lock_padding" to
    any locked page elements to prevent their shift*/
    if (lockPadding.lenght > 0) {
      for (let index = 0; index < lockPadding.lenght; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    //locking for animation time to prevent double-tap scroll fail
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
  //shows page scroll
  function bodyUnlock() {
    setTimeout(() => {
      if (lockPadding.lenght > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);
    //timeout to show scroll after animation
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }
});
