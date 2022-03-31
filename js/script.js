$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.menu').toggleClass('active');
      $('html, body').toggleClass('lock');
   });
});