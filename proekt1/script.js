var alreadyshown = new Array();
var username="";
let usrinfo;
let usr;
let k=0;
let selected = new Array();
var ceni = new Array();


function start(){
    for(var i=0; i<36; i++){
        ceni.push(Math.floor(Math.random() * 2500 + 1));
    }
    sessionStorage.setItem("ceni", JSON.stringify(ceni));
    
    var prods = document.getElementById("center");
    prods.style.width = "50%";
    prods.style.margin = "auto";
    addProducts(prods);
    var status = sessionStorage.getItem("loginstatus");
    console.log(status);
    if(status == "true"){
        var top = document.getElementsByClassName("top")[0];
        var usnm = sessionStorage.getItem("usrnm");
        var pusnm = document.createElement("p");
        pusnm.style.fontSize="large";
        pusnm.style.textAlign="right";
        var pfp = document.createElement("img");
        pfp.src = "logos/blank-pfp.png";
        pfp.style.width = "15%";
        pfp.style.height = "15%";
        pfp.style.paddingLeft="5%"
        pfp.style.display="inline";
        pusnm.innerHTML = usnm;
        pusnm.appendChild(pfp);
        var loginid = document.getElementById("login");
        var signupid = document.getElementById("signup");
        /*loginid.remove();
        signupid.remove();*/
        top.removeChild(loginid);
        top.removeChild(signupid);
        top.appendChild(pusnm);
    }
    var cart = document.getElementById("cart");
    cart.onclick = function(){
        var stat1 = sessionStorage.getItem("loginstatus");
        if(stat1 !== "true"){
            window.alert("Log in to access your profile");
            return;
        }
        else{
           window.open("mycart.html");
        }
    }
}



function addProducts(prodDiv){
    var product;
    var counter=0;
    for(var i=0; i<15; i++){
        var index;
        do{
            index = Math.floor(Math.random()*36);
        }
        while(alreadyshown.includes(index));
        alreadyshown[counter++] = index;
        product = createpost(index);
        prodDiv.appendChild(product)
    }
    
    sessionStorage.setItem("prodarr", selected);
}

function createpost(index){
    var post = document.createElement("div");
    var br = document.createElement("br");
    var sellername = document.createElement("p");
    var desc = document.createElement("p");
    var frm = document.createElement("form");
    frm.setAttribute("method", "post");
    frm.setAttribute("action", "#");
    frm.style.clear = "both";
    var comment = document.createElement("textarea");
    comment.setAttribute("placeholder", "Add a comment");
    comment.style.outline = "none";
    comment.style.border = "none";
    comment.style.display = "inline-block";
    comment.style.borderBottom = "1px solid white";
    comment.style.backgroundColor = "black";
    comment.style.width = "60%";
    comment.style.color = "white";
    comment.style.resize = "none";
    comment.style.marginRight = "10%";
    var postcom = document.createElement("p");
    postcom.innerHTML = "Post";
    postcom.style.display = "inline-block"
    postcom.style.cursor = "pointer";

    postcom.onclick = function(){
        var stat = sessionStorage.getItem("loginstatus");
        if(stat !== "true"){
            window.alert("Log in to comment");
        }
        else{
            username = sessionStorage.getItem("usrnm");
            //window.alert(username);
            var comdata = comment.value;
            if(comdata == ""){
                return;
            }
            else{
                var com = document.createElement("p");
                com.innerHTML = username + ": " + comdata;
                post.appendChild(com);
                comment.value="";
            }
        }
        /*username = localStorage.getItem("usrnm");
        window.alert(username);*/
    }

    frm.appendChild(comment);
    frm.appendChild(postcom);
    desc.innerHTML = "Cena: " + ceni[index] + " denari";
    sellername.innerHTML = "Seller " + Math.floor(Math.random()*500 +1);
    sellername.style.fontSize = "10";
    sellername.style.paddingTop = "3%";


    var img = document.createElement("img");
    img.style.width = "70%";
    img.style.height = "120%"
    img.src = "products_temp/item" + (index+1) +".jpg"

    let numlikes = Math.floor(Math.random() * 1500 + 1);

    var statusbar = document.createElement("div");
    var likecount = document.createElement("p");
    likecount.innerHTML = numlikes + " Likes";
    var like = document.createElement("img");
    var likestatus = 0;
    like.src = "logos/like-icon.jpg";
    like.style.width = "auto";
    like.style.maxWidth = "5%";
    like.style.height = "5%";
    like.style.paddingRight = "1%";
    like.style.cursor = "pointer";

    var comimg = document.createElement("img");
    comimg.src = "logos/comment-icon.jpg";
    comimg.style.maxWidth = "auto";
    comimg.style.maxWidth = "5%";
    comimg.style.height = "5%";
    comimg.style.paddingRight = "1%";
    var comlink = document.createElement("a");
    comlink.setAttribute("href", "https://www.google.com");
    comlink.appendChild(comimg);

    var tocart = document.createElement("img");
    tocart.src = "logos/add-to-cart.png";
    tocart.style.maxWidth = "auto";
    tocart.style.maxWidth = "5%";
    tocart.style.height = "5%";
    tocart.style.paddingRight = "1%";
    tocart.style.cursor = "pointer";
    tocart.onclick = function(){
        var stat2 = sessionStorage.getItem("loginstatus");
        if(stat2 !== "true"){
            window.alert("Log in to add to cart");
            return;
        }
        else{
            window.alert("Item added to cart");
            selected.push(img.src);
            console.log(selected.length);
            console.log(img.src);
            sessionStorage.removeItem("prodarr")
            sessionStorage.setItem("prodarr", JSON.stringify(selected));
        }
        
    }

    statusbar.appendChild(like);
    statusbar.appendChild(comlink);
    statusbar.appendChild(tocart);
    statusbar.appendChild(likecount);

    like.onclick = function(){
        if(likestatus == 0){
            likecount.innerHTML = (++numlikes) + " Likes";
            statusbar.removeChild(likecount);
            statusbar.appendChild(likecount);
            like.src = "logos/liked-icon2.jpg";
            likestatus = 1;
        }
        else{
            likecount.innerHTML = (--numlikes) + " Likes";
            statusbar.removeChild(likecount);
            statusbar.appendChild(likecount);
            like.src = "logos/like-icon.jpg";
            likestatus = 0;
        }
    };


    post.appendChild(sellername);
    post.appendChild(img);
    post.appendChild(br);
    post.appendChild(statusbar);
    post.appendChild(desc);
    post.appendChild(frm);

    return post;
}



window.addEventListener("load", start, false);