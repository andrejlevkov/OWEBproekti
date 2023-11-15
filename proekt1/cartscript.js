window.addEventListener("load", start, false)


function start(){
    var usn = sessionStorage.getItem("usrnm");
    console.log(usn);
    document.getElementById("h4").innerHTML = usn;
    var arr = sessionStorage.getItem("prodarr");
    var cont = JSON.parse(arr);
    console.log(cont.length);
    var items = document.getElementById("list");
    items.style.listStyleType = "none";
    for(var i=0; i<cont.length; i++){
        var pic = document.createElement("img");
        pic.src = cont[i];
        pic.style.width = "10%";
        pic.style.height = "10%";
        var li = document.createElement("li");
        li.appendChild(pic);
        items.appendChild(li);
        console.log(cont[i]);
    }

    var upload = document.getElementById("upload");
    upload.addEventListener("click", setphotos, false);
}
function setphotos(){
    var x = document.getElementById("myphotos");
    var p = document.getElementById("img");
    x.appendChild(p);
}