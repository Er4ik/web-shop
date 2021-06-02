const popupLinks = document.querySelectorAll('.popup_link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock_padding")

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
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
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {                                   //checking popup existance
        const popupActive = document.querySelector('.popup.open')   //closing opened popup
    if(popupActive){
        popupClose(popupActive, false);        
    } else {
        bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function(e) {
        if (!e.target.closest('.popup_content')) {
            popupClose(e.target.closest('.popup'));                  //close popup if there's no content(clicking beyond the edges)
        }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {                  //doUnlock to lock scroll even if new popup is opened from opened one
    if(unlock){
        popupActive.classList.remove('open')
        if(doUnlock){
            bodyUnlock();
        }
    }
}
//hides page scroll
function bodyLock() {  
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';  //calculates the width of the scroll to prevent page shift

    if(lockPadding.lenght > 0) {                                  
     for (let index = 0; index < lockPadding.lenght; index++) {   //you should add class="lock_padding" to any locked page elements to prevent their shift
          const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;                
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;                                               //locking for animation time to prevent double-tap scroll fail
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
//shows page scroll
function bodyUnlock() {
    setTimeout(function (){
        if (lockPadding.lenght > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');       
    }, timeout);

    unlock = false;                                           //timeout to show scroll after animation    
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

/*document.addEventListener('keydown', function (e){          //closing popup with Escape button
    if (e.which === 27) {
        const popupActive = document.querySelector('popup.open');
        popupClose(popupActive);
    }
});
*/
