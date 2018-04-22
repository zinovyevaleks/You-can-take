$(document).ready(function(){


   $('.reg-link, .log-link').click(function () {
       $('.popup--login').toggleClass('hidden');
       $('.popup--signup').toggleClass('hidden');
       });


   $('.rules-link, .video-inload-rules-link').click(function () {
       $('.popup--faq').removeClass('hidden');
       });

   });
