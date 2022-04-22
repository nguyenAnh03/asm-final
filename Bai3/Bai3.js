function doimucgia() {
    var arrgia = document.getElementsByName('gia');
    var ojb = document.getElementById('mucgia');
    mucdangchon = ojb.value;
    for(let i = 0; i < arrgia.length; i++){
        gia = parseFloat(arrgia[i].innerText);
        if (gia<=mucdangchon || mucdangchon == -1) {
            arrgia[i].parentNode.style.display = '';
        }else{
            arrgia[i].parentNode.style.display = 'none';
        }
    }
    tongtien();
}
function doiloaihang() {
    var arrloaih = document.getElementsByName('loai');
    var ojb = document.getElementById('loaihang');
    loaidangchon = ojb.value;
    for(let i = 0; i < arrloaih.length; i++){
        loai = arrloaih[i].getAttribute('value');
        // loai = aloai.value;
        if (loai == loaidangchon || loai == 'all') {
            arrloaih[i].parentNode.style.display = '';
        }else{
            arrloaih[i].parentNode.style.display = 'none';
        }
        if(loaidangchon == 'all'){
            arrloaih[i].parentNode.style.display = '';
        }
        console.log(loai);
        console.log(loaidangchon);
    }
    tongtien();
}
for(let i = 0; i < 7; i++){
    var arrsl = document.getElementsByName('soluong');
    arrsl[i].style.backgroundColor = 'aliceblue';
}
function tichcheckbox(i) {
    var arrsl = document.getElementsByName('soluong');
    arrsl[i].disabled = !arrsl[i].disabled;
    arrsl[i].focus();
    if(arrsl[i].disabled == true){
        arrsl[i].value = 0;
        arrsl[i].parentNode.nextElementSibling.innerText = '';
        arrsl[i].style.backgroundColor = 'aliceblue';
    }else{
        arrsl[i].style.backgroundColor = 'aqua';
    }
    tongtien();
}
var baoloi;
function thanhtien(obj) {
    var soluong = obj.value;
    if(soluong < 0) {
        alert('Yêu cầu nhập số lượng lớn hơn 0!');
        soluong = 0;
        document.getElementsByName('soluong').innerHTML = 0;
    }
    if(parseFloat(soluong) != parseInt(soluong) && soluong>0 && soluong != null) {
        baoloi = `<div class="nen">
                    <button id="btn" onclick="tat()">x</button>
                    <div class="trongloi" id="trong">Có phải bạn muốn nhập số ${Math.round(soluong)} hay một số khác!</div>
                    <em style="color: yellow;">Số lượng phải là số nguyên</em>
                 </div>`;
        soluong = 0;
        document.getElementsByName('soluong').innerHTML = 0;
        document.getElementById('trongloi').innerHTML = baoloi;
        document.getElementById('trongloi').style.zIndex = 1;
    }else{
        baoloi = ''
        document.getElementById('trongloi').innerHTML = baoloi;
        document.getElementById('trongloi').style.zIndex = -1;
    } ;
    var gia = obj.parentNode.previousElementSibling.innerText;
    obj.parentNode.nextElementSibling.innerText = soluong*gia;
    tongtien()
}
function tongtien() {
    var sum = 0;
    var arrthanhtien = document.getElementsByName('thanhtien');
    for (let i = 0; i < arrthanhtien.length; i++) {
        if(arrthanhtien[i].parentNode.style.display == ''){
            tien = arrthanhtien[i].innerText;
            sum += Number(tien);
        }      
    }
    document.getElementById('tongtien').innerText = sum +'$';
}
function tat() {
    document.getElementById('trongloi').innerHTML = null;
    document.getElementById('trongloi').style.zIndex = -1;
}
