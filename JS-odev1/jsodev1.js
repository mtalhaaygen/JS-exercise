let adiniz = prompt("Adiniz : ","Lütfen adinizi giriniz")

document.querySelector("#selam").innerHTML = `Merhaba, <b>${adiniz}!</b> Hoş geldin!`
function tarihyaz(){
    var tarih=new Date();
    let haftaningunu = tarih.getDay();
    let gun;
    switch (haftaningunu){
        case 1:
            gun ="Pazartesi"
            break;
        case 2:
            gun ="Salı"
            break;
        case 3:
            gun ="Çarşamba"
            break;
        case 4:
            gun ="Perşembe"
            break;
        case 5:
            gun ="Cuma"
            break;
        case 6:
            gun ="Cumartesi"
            break;
        case 7:
            gun ="Pazar"
            break;
    }

    document.querySelector("#today").innerHTML =`${tarih.getDate()}/${tarih.getMonth()+1}/${tarih.getFullYear()} ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gun}`

    var time
    time = setInterval('tarihyaz()', 1000);
}
tarihyaz()


