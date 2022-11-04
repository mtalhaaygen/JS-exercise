let ulDOM = document.querySelector("#list")
let i = 0;
while (localStorage.getItem(i) != null) 
{
    // bu while ile her sayfa yenilendiğinde localStroge deki veriler geri yükleniyor
    const liDOM = document.createElement("li");
    liDOM.innerHTML = localStorage.getItem(i);
    // liDOM.setAttribute("onclick", "textdeco()");
    ulDOM.append(liDOM);
    i++;
}
function newElement(){
    let veri;
    const liDOM = document.createElement("li");
    if (veri = document.querySelector("#task").value) // sadece space eklenmesine engel ol
    {
        liDOM.innerHTML = veri;
        // liDOM.setAttribute("onclick", "textdeco()");
        ulDOM.append(liDOM);
        localStorage.setItem(i, veri);
        i++;
        console.log("oluşturuldu toast");
    }
    else
    {
        console.log("boş ekleme uyarı toast");
        //toast mesaj uyarı 
        //Listeye boş ekleme yapamazsınız!
        // id="liveToast2" 
    }
}

function DeleteAll(){
    if(ulDOM.innerHTML != "")
    {
        // hepsi silinecek tamam or iptal if ile kontrol et
        console.log("hepsi silinsin mi toast");
        let ulDOM = document.querySelector("#list")
        ulDOM.innerHTML = null;
        i = 0;
        localStorage.clear();
    }
    else
    {
        console.log("liste zaten boş");
    }
}
function textdeco()
{
    item.setAttribute("style", "text-deca:red;");
}

// element.setAttribute("style", "background-color:red;");
// let lilerim = document.querySelectorAll("li");
// lilerim.forEach(textdeco);
// ulDOM.onclick = function(){ // bu sayfa yenileme fonksiyonuna ihtiyaç duymamın sebebi 
//     console.log("isaretle fonksiyonu");
    
// //     window.location.reload();
// };