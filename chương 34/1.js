document.addEventListener('DOMContentLoaded',function(){
    var trangthai = 'duoi300';
    //bắt sự kiện cuộn chuột
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset >300){
            if(trangthai == 'duoi300'){
            console.log('0000000000000000000000000000000000000');
                trangthai = 'tren300';
            }
            // console.log('0000000000000000000000000000000000000');
        }
    })
},false)