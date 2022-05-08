// Yazacağınız javascript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.

let ulDOM = document.querySelector("#list")
function newElement(){
    const liDOM = document.createElement("li")
    let veri = document.querySelector("#task").value
    liDOM.innerHTML = veri
    console.log(liDOM)
    ulDOM.append(liDOM)

}

function DeleteElement(){
    let ulDOM = document.querySelector("#list")
    ulDOM.innerHTML = ulDOM.innerHTML.slice(0,1)

}

let lilerim = document.querySelectorAll("li")
lilerim.onclick = function(){
    console.log("isaretle fonksiyonu")
};

