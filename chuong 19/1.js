var sinhvien = {
    ho: "le trung",
    ten:"khanh",
    tuoi: 20,
    chieucao: 167,

    hovaten: function(){
        return this.ho + " " + this.ten;
    },
    tilecandoi: function(){
        if(this.chieucao>170){
            return "dep";
        }else{ return "thap";}
    }
}
console.log(sinhvien.hovaten());
console.log(sinhvien.tilecandoi())