document.addEventListener('DOMContentLoaded',function(){
    var trangthai = 'duoi300';
    var dt = document.querySelector('.row');
    window.addEventListener('scroll',function(){
        // window.pageYOffset
        if(window.pageYOffset > 200){
            // if(trangthai == 'duoi300'){
               
                // trangthai = 'tren300';
                dt.classList.add('nholai');
            // }
        }
        else if(window.pageYOffset <=200){
            // if(trangthai =='tren300'){
                dt.classList.remove('nholai');
                // trangthai = 'duoi300';
            // }
        }
    })
},false)