document.addEventListener('DOMContentLoaded',function(){
    var menu = document.querySelector('.menu');
    var mau = 'duoi';
    var giua = document.querySelector('.giua');
    var vitri = 'yen';
    var dungyen = giua.offsetTop;
    var cuoi = dungyen + 400;
    
    console.log(dungyen);
    // console.log(menu);
    window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);

        if(window.pageYOffset >100){
    // console.log(window.pageYOffset);

            if(mau =='duoi'){
                mau = 'qua';
                menu.classList.add('thaymau');
            }
        }
        else if(window.pageYOffset <100){
            if(mau =='qua'){
               mau = 'duoi';
               menu.classList.remove('thaymau');
            }
       
        }


        if((window.pageYOffset > dungyen) && (window.pageYOffset < cuoi)) {
            if(vitri == 'yen'){
                vitri = 'sau';
                giua.classList.add('dung');
            }
        }
        else if ((window.pageYOffset < dungyen)||(window.pageYOffset < cuoi)) {
            
           if(vitri =='sau'){
             vitri = 'yen';
            giua.classList.remove('dung');
           }
        }

    })

},false)