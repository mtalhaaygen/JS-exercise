let ulDOM = document.querySelector("#list")
let i = 0;

while (localStorage.getItem(i) != null)
{
    // bu while ile her sayfa yenilendiğinde localStroge deki veriler geri yükleniyor
    const liDOM = document.createElement("li");
    liDOM.id = i;
    liDOM.innerHTML = `<div class="row">
                            <span class="col-sm-11" ondblclick="isaretle(${i})">${localStorage.getItem(i)}</span>
                            <button type="button" class="close col-1" onclick=del_li(${i}) aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    ulDOM.append(liDOM);
    i++;
}

function newElement(){
    let veri;
    const liDOM = document.createElement("li");
    veri = document.querySelector("#task").value;
    if (veri != "" && veri.search("  ") == -1) // sadece space eklenmesine engel olduk. Belki burası güncellenebilir edilebilir
    {
        liDOM.id = i;
        liDOM.innerHTML = `<div class="row">
                                <span class="col-sm-11" ondblclick="isaretle(${i})">${veri}</span>
                                <button type="button" class="close col-1" onclick=del_li(${i}) aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
        ulDOM.append(liDOM);
        localStorage.setItem(i, veri);
        i++;
        console.log("oluşturuldu toast"); // yeni eleman eklendi toast
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


function del_li(idno){
    delElement = document.getElementById(idno); //silinecek element seçildi
    //delElement silinecek emin misiniz? TOAST
    delElement.remove();
    while (localStorage.getItem(idno + 1) != null)
    {
        localStorage.setItem(idno,localStorage.getItem(idno + 1));
        idno++;
    }
    i--;
    localStorage.removeItem(idno);
}

function isaretle(idno){
    isaretElement = document.getElementById(idno);
    stil = isaretElement.style.textDecoration;
    if (stil == "line-through")
    {
        isaretElement.style.textDecoration = "";
    }else{
        isaretElement.style.textDecoration = "line-through";
    }
}