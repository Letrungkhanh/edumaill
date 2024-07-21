document.addEventListener("DOMContentLoaded",function(){
    var x1 = document.getElementById('1');
    x1.onclick = function(){
        console.log('bạn vừa kích vào' + x1)
        x1.classList.add('dixuong');
    }
},false)