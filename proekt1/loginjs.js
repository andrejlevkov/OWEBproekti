var username;
var password;

function start(){
    localStorage.clear();
    document.forms[0].reset();
    var btn = document.getElementById("submit");
    btn.addEventListener("click", setUsrIPass, false);
}

function setUsrIPass(){
    username = document.getElementById("usrname").value;
    password = document.getElementById("pass").value;
    sessionStorage.setItem("usrnm", username);
    sessionStorage.setItem("loginstatus", "true");
    console.log(localStorage.getItem("loginstatus"));
}






window.addEventListener("load", start, false);