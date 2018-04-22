$(document).ready(function(){


   $('.reg-link').click(function () {
       $('.popup--login').toggleClass('hidden');
       $('.popup--signup').toggleClass('hidden');
       });
   $('.log-link').click(function () {
       $('.popup--signup').toggleClass('hidden');
       $('.popup--login').toggleClass('hidden');
       });

   });
