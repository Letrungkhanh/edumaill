document.addEventListener('DOMContentLoaded',function(){
    //khai báo các biến sử dụng
    var nut = document.getElementsByClassName('lg');
    var nd = document.getElementsByClassName('nd');
    for(var i = 0 ;i < nut.length ; i++){
       nut[i].onclick = function(){
        //khi click vào nút khác thì nut được click trước đó khi di chuôt không có màu trắng nữa
        for( var y =0; y<nut.length;y++){
            nut[y].classList.remove('mautrang');
            
        }
        
        this.classList.toggle('mautrang');
        //lấy về data

        
        var noidung = this.getAttribute('data-hienlen');
        // console.log(noidung);
        var phantu_hr = document.getElementById(noidung);
        for(var i = 0; i < nd.length;i++){
            nd[i].classList.remove('ra');
        }
        phantu_hr.classList.toggle('ra');
        // console.log(phantu_hr);
       } 
    }
},false)