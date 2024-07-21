document.addEventListener("DOMContentLoaded",function(){
    var tg = document.getElementsByClassName("lg");
    var tamgiac = tg[0];
    // console.log(tamgiac);
    var ds  = document.getElementsByClassName('nd');
    var danhsach = ds[0];
    //sử dung hàm onclick
    tamgiac.onclick = function(){
        console.log("bạn vừa click");
        danhsach.classList.toggle("tgw");
    }
},false)