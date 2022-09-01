const popup = document.getElementById("myPopup");
const strelica = document.querySelector('.artbox__col-profile-arrow');



strelica.addEventListener('click', function() {

  if(popup.classList.contains('show')) {
    popup.classList.remove("show");
  }else {
    popup.classList.add("show");
  }

});



