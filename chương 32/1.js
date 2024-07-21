document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelector('.nut');
    var menutrai = document.querySelector('.menutrai');
    var den = document.querySelector('.den');
    var khoi = document.querySelector('.container');
    var kh
    nut.onclick = function(){
        den.classList.add('len');
        khoi.classList.add('diqua');

    }
},false)