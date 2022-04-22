var ma = document.getElementById('ma').value;
var reg_ma = /PS[0-9]{5}/
var reg_ten = /[A-Za-z' ']/;
var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
function xuly() {
    var ma = document.getElementById('ma').value;
    var ten = document.getElementById('ten').value;
    var mail = document.getElementById('mail').value;
    var arr_hos = document.getElementsByClassName('test');
    var arr_gender = document.getElementsByClassName('gioitinh');
    var arr_contry = document.getElementsByTagName('option');
    //Check masv
    if (!reg_ma.test(ma)) {
        var loi = `<span class="loi">Mã sinh viên không được để trống và gồm 7 kí tự và bắt đầu bằng PS</span>`;
        document.getElementById('loima').innerHTML = loi;
    } else {
        document.getElementById('loima').innerHTML = '';
       
    }
    // check tên
    if (!reg_ten.test(ten) || ten.length > 50 || ten.length < 5) {
        var loi = `<span class="loi">Tên sinh viên không được để trống, lớn hơn 5 kí tự và ít hơn 50 kí tự</span>`;
        document.getElementById('loiten').innerHTML = loi;
    } else {
        document.getElementById('loiten').innerHTML = '';
       
    }

    // check mail
    if (!reg_mail.test(mail)) {
        var loi = `<span class="loi">Nhập sai cú pháp email!</span>`;
        document.getElementById('loiemail').innerHTML = loi;
    } else {
        document.getElementById('loiemail').innerHTML = '';
       
    }
    if(mail == ''){
        var loi = `<span class="loi">Email không được để trống!</span>`;
        document.getElementById('loiemail').innerHTML = loi;
    }
    // check sở thích
    var demhos = 0;
    for(let i = 0; i < arr_hos.length; i++){
        if(arr_hos[i].checked == true){
            demhos++;
            document.getElementById('loist').innerHTML = '';
            
            if(arr_hos[i].value == 'khac'){
                document.getElementById('khac').innerHTML = 'Viết sở thích của bạn vào đây!';
            }else{ document.getElementById('khac').innerHTML = '';   }    
        }
        if(demhos == 0){
            var loi = `<span class="loi">Phải chọn một sở thích!</span>`;
            document.getElementById('loist').innerHTML = loi;
        }

    }
    // check giới tinh
    var demgen = 0;
    for(let i = 0; i < arr_gender.length; i++){
        
        if(arr_gender[i].checked == true){
            ++demgen;
            document.getElementById('loigt').innerHTML = '';    
                
        }
        if(demgen == 0){
            var loi = `<span class="loi">Phải chọn một giới tính!</span>`;
            document.getElementById('loigt').innerHTML = loi;
        }

    }
    
    
    // check quốc tịch
    var demctr = 0;
    for(let i = 1; i < arr_contry.length; i++){
        if(arr_contry[i].selected == true){
            document.getElementById('loiqg').innerHTML = '';
            
            demctr++;
        }
        if(demctr == 0){
            document.getElementById('loiqg').innerHTML = 'Phải chọn một quốc tịch!';
        }
        console.log(demctr);
    }
    setTimeout(() => {
        Thongbaochucmung();
    }, 10);
}
var a = document.getElementsByTagName('select');

function thoigian() {
    var tg = new Date;
    var nam = tg.getFullYear();
    var thang = tg.getMonth()+1;
    var ngay = tg.getDate();
    var gio = tg.getHours();
    var phut = tg.getMinutes();
    var giay = tg.getSeconds();
    if(gio<12){
        var chao = document.getElementById('chao');
        chao = `<span class="cauchao">Chào buổi sáng!</span>`;
        document.getElementById('chao').innerHTML = chao;
    } else
    if(gio <=19){
        var chao = document.getElementById('chao');
        chao = `<span class="cauchao">Chào buổi chiều!</span>`;
        document.getElementById('chao').innerHTML = chao;
    }else
    if(gio>19){
        var chao = document.getElementById('chao');
        chao = `<span class="cauchao">Chào buổi tối!</span>`;
        document.getElementById('chao').innerHTML = chao;
    }
    
  }
function hiengio() {
    var tg = new Date;
    var nam = tg.getFullYear();
    var thang = tg.getMonth()+1;
    var ngay = tg.getDate();
    var gio = tg.getHours();
    var phut = tg.getMinutes();
    var giay = tg.getSeconds();
    var hotrong = `Hôm nay: ${ngay} - ${thang} - ${nam} * ${gio} : ${phut} : ${giay}`;
    document.getElementById("dongho").innerHTML = hotrong;
}
function matgio() {
    document.getElementById("dongho").innerHTML = null;
}
function Thongbaochucmung() {
    var a = document.getElementById('loima').innerText;
    var b = document.getElementById('loiten').innerText;
    var c = document.getElementById('loiemail').innerText;
    var d = document.getElementById('loigt').innerText;
    var e = document.getElementById('loist').innerText;
    var f = document.getElementById('loiqg').innerText;
    var g = document.getElementById('khac').innerText;
    if((a == '' )&& (b == '') && (c == '') && (d == '') && (e == '' ) && (f == '') && (g == '')){
        alert('Nhập thành công');
    }

}