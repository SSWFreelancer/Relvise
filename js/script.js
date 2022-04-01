$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.menu, .header__burger').toggleClass('active');
      $('html, body').toggleClass('lock');
   });
});
