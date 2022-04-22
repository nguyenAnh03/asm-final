var arr_hinh = [];

for (let index = 0; index < 10; index++) {
    arr_hinh[index] = new Image();
    arr_hinh[index].src = `IMG/${index}.jpg`;
}

var arr_name = [
    'ALBUM CẢNH ĐẸP',
    'CẦU RỒNG VÀNG - ĐÀ NẴNG',
    'HOÀNG HÔN TRÊN SÔNG',
    'HOÀNG HÔN TRONG THÀNH PHỐ',
    'THÀNH PHỐ VỀ ĐÊM',
    'PHỐ CỔ PHONG CÁCH TÂY PHƯƠNG',
    'BÌNH MINH TRÊN ĐƯỜNG SẮT',
    'NHÀ THỜ ĐỨC BÀ PARIS',
    'THÁP NGHIÊNG PISA',
    'THÁP ĐÔI PETRONAS',
];
var index = localStorage.getItem('vitri');
if (index == null) index = 0;
document.getElementById('nameimg').innerHTML = arr_name[index];
hinh.src = arr_hinh[index].src;
var stt =  Number(index)+ 1;
document.getElementById("dem").innerHTML = "" + stt + "/10";


var hinhnho = document.getElementsByName('hinhnho');
hinhnho[index].style.transform = 'scale(1.5,1.5)';
hinhnho[index].style.borderRadius =  '2px';

function next() {
    index++;
    if (index >= arr_hinh.length) index = 0;
    var hinh = document.getElementById("hinh");
    document.getElementById('nameimg').innerHTML = arr_name[index];
    hinh.src = arr_hinh[index].src;
    var stt =  Number(index)+ 1;
    document.getElementById("dem").innerHTML = "" + stt + "/10";
    localStorage.setItem('vitri', index);
    var item = (index - 1);
    if(index == 0) item = (arr_hinh.length -1);
    hinhnho[item].style.transform = '';
    hinhnho[item].style.borderRadius =  '';
    hinhnho[index].style.transform = 'scale(1.5,1.5)';
    hinhnho[index].style.borderRadius =  '2px';
    hinhnho[index].style.transition = '4s ease';
}

function back() {
    index--;
    if (index < 0) index = (arr_hinh.length - 1);
    var hinh = document.getElementById("hinh");
    document.getElementById('nameimg').innerHTML = arr_name[index];
    hinh.src = arr_hinh[index].src;
    var stt =  Number(index)+ 1;
    document.getElementById("dem").innerHTML = "" + stt + "/10";
    localStorage.setItem('vitri', index);
    var item = (index + 1);
    if(index == (arr_hinh.length - 1)) item = 0;
    hinhnho[item].style.transform = '';
    hinhnho[item].style.borderRadius =  '';
    hinhnho[index].style.transform = 'scale(1.5,1.5)';
    hinhnho[index].style.borderRadius =  '2px';
}

function clickimg(i) {
    // closeAuto();
    var item = index;
    index = i;
    var hinh = document.getElementById("hinh");
    document.getElementById('nameimg').innerHTML = arr_name[index];
    hinh.src = arr_hinh[index].src;
    var stt =  Number(index)+ 1;
    document.getElementById("dem").innerHTML = "" + stt + "/10";
    localStorage.setItem('vitri', index);
    hinhnho[item].style.transform = '';
    hinhnho[item].style.borderRadius =  '';
    hinhnho[index].style.transform = 'scale(1.5,1.5)';
    hinhnho[index].style.borderRadius =  '2px';
}

//Tự động chạy 
// var auto;
// function automatic() {
//     auto = setInterval(() => {
//         next();
//     }, 4000);
// }
// automatic();
// function closeAuto() {
//     clearInterval(auto);
// }
// // khi kích nút next hoặc back sau 10s sẽ automatic
// function backAuto() {
//     setTimeout(() => { 
//         automatic(); // 4s
//     }, 6000);        // 6s
// }


