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
        $('#liveToast1').toast('show');
    }
    else
    {
        console.log("boş ekleme uyarı toast");
        $('#liveToast2').toast('show');
        //toast mesaj uyarı 
        //Listeye boş ekleme yapamazsınız!
        // id="liveToast2" 
    }
}

function areYouSure()
{
    if(ulDOM.innerHTML != "")
    {
        $('#liveToast4').toast('show');
    }
    else
    {
        console.log("liste zaten boş");
        $('#liveToast3').toast('show');
    }
}
function confirmation(a)
{
    Boolean(a) ? DeleteAll() : console.log("silinme işlemi iptal edildi");
    $('#liveToast4').toast('hide');
}

function DeleteAll(){

	let ulDOM = document.querySelector("#list")
	ulDOM.innerHTML = null;
	i = 0;
	localStorage.clear();
}


function del_li(idno){
    delElement = document.getElementById(idno); //silinecek element seçildi
    delElement.remove();
    while (localStorage.getItem(idno + 1) != null)
    {
        localStorage.setItem(idno,localStorage.getItem(idno + 1));
        idno++;
    }
    i--;
    localStorage.removeItem(idno);
    window.location.assign("http://127.0.0.1:5500/JSOdev2/index.html")
}

function isaretle(idno){
    isaretElement = document.getElementById(idno);
    stil = isaretElement.style.textDecoration;
    stil2 = isaretElement.style.backgroundColor;
    if (stil == "line-through" && stil2 == "orange")
    {
        isaretElement.style.textDecoration = "";
        isaretElement.style.backgroundColor = "";

    }else{
        isaretElement.style.textDecoration = "line-through";
        isaretElement.style.backgroundColor = "orange";
    }
}

if (screen.width <= 600) {
    let Adddom = document.querySelector("#liveToastBtnAdd");
    let Cleardom = document.querySelector("#liveToastBtnClear");
    let imgDom = document.querySelector("#img1");

    imgDom.style = "width: 75%; background-color: white;";
    Adddom.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    Cleardom.innerHTML = `<i class="fa-solid fa-trash"></i>`;
}