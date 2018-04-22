var faqPopup = document.querySelector('.popup--faq'),
  faqLink = document.querySelector('.faq-link'),
  faqCross = faqPopup.querySelector('.cross'),
  loginPopup = document.querySelector('.popup--login'),
  loginLink = document.querySelector('.login-link'),
  loginLinks = document.querySelector('.login-link1'),
  loginCross = loginPopup.querySelector('.cross'),
  signupPopup = document.querySelector('.popup--signup'),
  signupCross = signupPopup.querySelector('.cross'),
  registrationLinks = document.querySelectorAll('.registration-link'),



  openModal = function (block) {
    if(block.classList.contains('hidden')) {
      block.classList.remove('hidden')
    };
  },
  closeModal = function (block) {
    if(!block.classList.contains('hidden')) {
      block.classList.add('hidden');
    }
  }

faqLink.addEventListener('click', function () {
  openModal(faqPopup);
});
loginLink.addEventListener('click', function () {
  openModal(loginPopup);
});
faqCross.addEventListener('click', function () {
  closeModal(faqPopup);
});
loginCross.addEventListener('click', function () {
  closeModal(loginPopup);
});
signupCross.addEventListener('click', function () {
  closeModal(signupPopup);
});



for (var i = 0; i <= registrationLinks.length; i++) {
    registrationLinks[i].addEventListener('click', function() {
        closeModal(loginPopup);
        openModal(signupPopup);
    })
};
