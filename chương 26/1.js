document.addEventListener('DOMContentLoaded' ,function(){
    var x1 = document.getElementById('a1');
    var khoi = document.getElementsByClassName('card-group')
   // console.log(khoi)
    x1.onclick = function(){
        khoi[0].classList.toggle('diqua');
    }
},false)