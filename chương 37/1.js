document.addEventListener('DOMContentLoaded',function(){
    var anh = document.querySelector('.anh');
    var vitri = anh.offsetTop - 200;
    var trangthai = 'duoi';
    console.log(vitri);
    
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > vitri){
            if(trangthai == 'duoi'){
                trangthai ='qua';
                anh.classList.add('hienlen');
            }
        }
        else if(window.pageYOffset < vitri){
            if(trangthai == 'qua'){
                trangthai = 'duoi';
                anh.classList.remove('hienlen');
            }
        }
    })
},false)