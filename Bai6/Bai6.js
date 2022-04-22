$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});
document.getElementById('dilen').style.opacity = '0';
window.addEventListener("scroll", function () {
    document.getElementById('dilen').style.opacity = '1';
    document.getElementById('dilen').style.transition = '1s';
    document.getElementById('dilen').style.color = 'white';
}); 
var bien = false;
function doibien() {
    bien = !bien;
    doimau();
}
function doimau() {
    if(bien == false){
    document.getElementById('dilen').style.opacity = '0.6';
    document.getElementById('dilen').style.transition = '1s';
    document.getElementById('dilen').style.color = '';
    }
}
var arr_xemthem = document.querySelectorAll('.xemthem');    
console.log(arr_xemthem);
var flag = true;  
function xemthemnoidung(i) {

    if(flag){
        document.getElementById(`noidung${i}`).style.height = '800px';
        arr_xemthem[i-1].value = 'Ẩn bớt';
        flag = !flag;
    }else{
      if (i == 1) {
        document.getElementById(`noidung${i}`).style.height = '120px';
      }
      if (i == 2) {
        document.getElementById(`noidung${i}`).style.height = '55px';
      }
      if (i == 3) {
        document.getElementById(`noidung${i}`).style.height = '90px';
      }
      if (i == 4) {
        document.getElementById(`noidung${i}`).style.height = '115px';
      }
      if (i == 5) {
        document.getElementById(`noidung${i}`).style.height = '110px';
      }
      arr_xemthem[i-1].value = 'Xem thêm';
      flag = !flag;
    }

}
