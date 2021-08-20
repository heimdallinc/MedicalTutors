let toggle = document.getElementById('togglebtn');
let nav = document.getElementById('nav-sidebar');
toggle.addEventListener('click', function () {

     if (nav.style.display === "none") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }

})
// var selector = '.nav-item a';

// $(selector).on('click', function(){
//     $(selector).removeClass('activity');
//     $(this).addClass('activity');
// });