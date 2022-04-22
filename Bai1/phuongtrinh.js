
var a = document.querySelector('#input1').value;
var b = document.querySelector('#input2').value;
var c = document.querySelector('#input3').value;
var bn = document.querySelector('.btn-click');
bn.disabled = true;
function choso() {
  a = Math.round(Math.random()*10);
  b = Math.round(Math.random()*10);
  c = Math.round(Math.random()*10);
  document.getElementById("input1").value = a;
  document.getElementById("input2").value = b;
  document.getElementById("input3").value = c;
  hieninfo();
  document.querySelector('.btn-click').disabled = false;
}
function inputChangekey() {
  a = document.querySelector('#input1');
  b = document.querySelector('#input2');
  c = document.querySelector('#input3');

  if(a.value === '' || b.value === '' || c.value === ''){
    bn.disabled = true;
  }else{
    a = a.value;
    b = b.value;
    c = c.value;
    bn.disabled = false;
    
  } 
  if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true || a>10 || b>10 || c>10){
    bn.disabled = true;
  }
  hieninfo();
}
function Change() {
  if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true || a>10 || b>10 || c>10){
    
    bn.disabled = true;
    var bgr1 = document.querySelector('#input1');
    var bgr2 = document.querySelector('#input2');
    var bgr3 = document.querySelector('#input3');
    
      setTimeout(() => {
        bgr1.style.color = "white";
        bgr2.style.color = "white";
        bgr3.style.color = "white";

      }, 1);
      setTimeout(() => {
        alert("Yêu cầu nhập số từ 0 đến 10!");
      }, 10);
      setTimeout(() => {
        bgr1.style.color = "black";
        bgr2.style.color = "black";
        bgr3.style.color = "black";
      }, 1000);
        
    }
}

function hieninfo() {
  if(!(a.value == '' || b.value == '' || c.value == '')){
  document.querySelector('#a').innerHTML = a;
  document.querySelector('#b').innerHTML = b;
  document.querySelector('#c').innerHTML = c;
  }else{
    var x = "a"; var y = "b"; var z = "c";
    document.querySelector('#a').innerHTML = x;
    document.querySelector('#b').innerHTML = y;
    document.querySelector('#c').innerHTML = z;
  }
}
var ptb2 = {
  giai:function() {
      var a = document.getElementById("input1").value;
      var b = document.getElementById("input2").value;
      var c = document.getElementById("input3").value;
      if(a == 0){
          if(b != 0 ) {
              var x = -c/b;
              var trong = `<p>Phương trình bậc nhất có nghiệm duy nhất</p>
                           <p>x = ${x.toFixed(2)}</p>
                          `;
          }else{
              if(c != 0){
                  var trong = `<p>Phương trình bậc nhất vô nghiệm</p>`;
              }else {
                  var trong = `<p>Phương trình vô số nghiệm</p>`;
              }
          }
      }else{
          var delta = Math.pow(b,2) - 4*a*c;
          if (delta < 0){
              var trong = `<p>Phương trình vô nghiệm</p>`;
          }else if (delta == 0){
              var x0 = -b/(2*a);
              var trong = `<p>Phương trình có nghiệm kép</p>
                           <p>x = ${x0.toFixed(2)}</p>
                          `;
          }else if(delta > 0){
              var x1 = (-b + Math.sqrt(delta))/(2*a);
              var x2 = (-b - Math.sqrt(delta))/(2*a);
              var trong =`<p>Phương trình có hai nghiệm</p>
                          <p>x<sub>1</sub> = ${x1.toFixed(2)}</p>
                          <p>x<sub>2</sub> = ${x2.toFixed(2)}</p>
                          `;
              
          }

      }      
      dem();
      document.getElementById("kq").innerHTML = trong; 
      document.querySelector('.btn-click').disabled = true;
  }
}

var soalangiai = 0;
function dem() {
  soalangiai++;
  document.getElementById("sl").innerHTML = soalangiai;
}
function thoigian() {
  var tg = new Date;
  var nam = tg.getFullYear();
  var thang = tg.getMonth()+1;
  var ngay = tg.getDate();
  var gio = tg.getHours();
  var phut = tg.getMinutes();
  var giay = tg.getSeconds();
  var hotrong = `Bây giờ là: ${ngay} - ${thang} - ${nam} * ${gio} : ${phut} : ${giay}`;
  document.getElementById("dongho").innerHTML = hotrong;
}

