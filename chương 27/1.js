document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById("n1");
    var trangthai = "lan1";
    var khoi = document.getElementById("n2");
    nut.onclick = function(){
        if (trangthai == "lan1"){
            // console.log("click lần 1");
            trangthai = "lan2";
            khoi.classList.remove("kcd");
            khoi.classList.add("chieu1");
            //xử lý code cho lần 1
        }
        else if(trangthai == "lan2"){
            console.log("click lần 2");
            trangthai = "lan1";
            // xử lý code cho lần 2
            khoi.classList.remove("chieu1");
        }
    }
},false)