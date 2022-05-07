# JS-exercises

## JS-Odev1
  Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran yapdım. Bunu hem JavaScript ile hemde Python ile yaptım. İlginç gelebilir basit bir kurulumun ardından `<py-script>print("hello world")</py-script>` şeklinde Python kodlarınızı HTML sayfanıza ekleyebilirsiniz.

  ```py
  <py-script>
import asyncio
import datetime as dt

while True:
    await asyncio.sleep(1)
    zaman = dt.datetime.now()
    haftaningunu = dt.datetime.strftime(zaman, '%A')
    pyscript.write("today2",f"{zaman.day}/{zaman.month}/{zaman.year}  {zaman.hour}:{zaman.minute}:{zaman.second} {haftaningunu}")
   <py-script>
  ```
 
<img width="725" alt="image" src="https://user-images.githubusercontent.com/63591196/167265196-18859fff-2260-443f-be65-86382e3d8183.png">  
  
  Aynı işi yapan JavaScript Kodlarımda şu şekilde
```JS
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
```
