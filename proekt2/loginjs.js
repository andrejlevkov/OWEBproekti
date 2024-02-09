var username;
var password;

$(document).ready(function (){
    localStorage.clear();
    document.forms[0].reset();
    /*var btn = document.getElementById("submit");
    btn.addEventListener("click", setUsrIPass, false);*/
    $("#submit").click(function(){
        username = $("#usrname").val();
        password = $("#pass").val();
        sessionStorage.setItem("usrnm", username);
        sessionStorage.setItem("loginstatus", "true");
    });
});

/*function setUsrIPass(){
    username = document.getElementById("usrname").value;
    password = document.getElementById("pass").value;
    sessionStorage.setItem("usrnm", username);
    sessionStorage.setItem("loginstatus", "true");
    console.log(localStorage.getItem("loginstatus"));
}*/






//window.addEventListener("load", start, false);