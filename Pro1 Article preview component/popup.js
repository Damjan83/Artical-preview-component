const popup = document.getElementById("myPopup");
const strelica = document.querySelector('.strelica');



strelica.addEventListener('click', function() {
  //popup.classList.toggle("show");


  if(popup.classList.contains('show')) {
    popup.classList.remove("show");
    console.log('2');
  }else {
    popup.classList.add("show");
    console.log('1');
  }

});



