var alreadyshown = new Array();
var username="";
let usrinfo;
let usr;
let k=0;
let selected = new Array();
var ceni = new Array();
let reviews = [
    "https://www.discogs.com/release/4843942-The-Beatles-1958-1962",
    "https://www.discogs.com/release/7132498-Joy-Division-Unknown-Pleasures",
    "https://www.discogs.com/release/15964384-Guns-N-Roses-Greatest-Hits",
    "https://www.discogs.com/release/474703-Gorillaz-Demon-Days",
    "https://www.discogs.com/release/7445961-Nirvana-Nirvana",
    "https://www.discogs.com/release/5557400-Kiss-Kiss",
    "https://www.discogs.com/release/7529964-ACDC-For-Those-About-To-Rock-We-Salute-You",
    "https://www.discogs.com/release/11247342-Rammstein-Sehnsucht",
    "https://www.discogs.com/release/26660234-Laibach-Love-Is-Still-Alive",
    "https://www.discogs.com/release/811739-Elton-John-Elton-John",
    "https://www.discogs.com/release/1349109-Eric-Clapton-Slowhand",
    "https://www.discogs.com/release/26620544-Pink-Floyd-Live-1969",
    "https://www.discogs.com/release/1010134-ABBA-Greatest-Hits-Vol-2",
    "https://www.discogs.com/release/2631250-Bee-Gees-Size-Isnt-Everything",
    "https://www.discogs.com/release/8939669-Led-Zeppelin-Led-Zeppelin-IV",
    "https://www.discogs.com/release/14813062-NSYNC-Home-For-Christmas",
    "https://www.discogs.com/release/27098385-Daft-Punk-Homework",
    "https://www.discogs.com/release/731922-The-Cranberries-No-Need-To-Argue",
    "https://www.discogs.com/release/569118-Def-Leppard-Hysteria",
    "https://www.discogs.com/release/7410421-Earth-Wind-Fire-The-Best-Of-Earth-Wind-Fire-Vol-II",
    "https://www.discogs.com/release/29093263-The-Mamas-The-Papas-16-Of-Their-Greatest-Hits",
    "https://www.discogs.com/release/367135-Queen-Greatest-Hits",
    "https://www.discogs.com/release/3730962-Radiohead-Pop-Is-Dead",
    "https://www.discogs.com/release/4726908-Rage-Against-The-Machine-Rage-Against-The-Machine",
    "https://www.discogs.com/release/464530-The-Rolling-Stones-Stripped",
    "https://www.discogs.com/release/5914196-The-Doors-The-Doors",
    "https://www.discogs.com/release/2313072-The-Police-Greatest-Hits",
    "https://www.discogs.com/release/13855670-Deep-Purple-Live-In-Newcastle-2001",
    "https://www.discogs.com/release/57682-Dead-Can-Dance-Dead-Can-Dance",
    "https://www.discogs.com/release/1069379-Ramones-Ramones",
    "https://www.discogs.com/release/789219-Blondie-Greatest-Hits",
    "https://www.discogs.com/release/421962-Talking-Heads-The-Best-Of-Talking-Heads",
    "https://www.discogs.com/release/576188-The-Smiths-The-Smiths",
    "https://www.discogs.com/release/381660-Bon-Jovi-These-Days",
    "https://www.discogs.com/release/4533334-Aerosmith-Aerosmiths-Greatest-Hits",
    "https://www.discogs.com/release/390681-Sex-Pistols-Never-Mind-The-Bollocks-Heres-The-Sex-Pistols"
];

$(document).ready(function(){
    for(var i=0; i<36; i++){
        ceni.push(Math.floor(Math.random() * 2000 + 1500));
    }
    sessionStorage.setItem("ceni", JSON.stringify(ceni));

    $("#center").css({'width': '50%', 'margin': 'auto'});
    addProducts($("#center"));
    var status = sessionStorage.getItem("loginstatus");
    if(status == "true"){
        var $usnm = sessionStorage.getItem("usrnm");
        var $pusnm = $("<p></p>").text($usnm);
        $pusnm.css({'fontSize': 'large', 'textAlign': 'right'});
        var $pfp = $("<img>");
        $pfp.attr("src", "logos/blank-pfp.png");
        $pfp.css({'width':'15%', 'height':'15%', 'paddingLeft':'5%', 'display':'inline'});
        $pusnm.append($pfp);
        $(".top #login").remove();
        $(".top #signup").remove();
        $(".top").append($pusnm);
    }
    $("#cart").click(function(){
        var stat1 = sessionStorage.getItem("loginstatus");
        if(stat1 !== "true"){
            window.alert("Log in to access your profile");
            return;
        }
        else{
           window.open("mycart.html");
        }
    });

})
function addProducts($prodDiv){
    var $product;
    var counter=0;
    for(var i=0; i<15; i++){
        var index;
        do{
            index = Math.floor(Math.random()*36);
        }
        while(alreadyshown.includes(index));
        alreadyshown[counter++] = index;
        $product = createpost(index);
        $prodDiv.append($product);
    }
    
    sessionStorage.setItem("prodarr", selected);
}

function createpost(index){
    var post = $("<div></div>");
    var br = $("<br>");
    var sellername = $("<p></p>");
    var desc = $("<p></p>");
    var frm = $("<form></form>");
    frm.attr({method: 'post', action: "#"});
    frm.css("clear", "both");

    var comment = $("<textarea></textarea>");
    comment.attr("placeholder", "Add a comment");
    comment.css({'outline': 'none', 'border': 'none', 'display': 'inline-block', 'borderBottom': '1px solid white', 'backgroundColor': 'black',
                    'width': '60%', 'color': 'white', 'resize': 'none', 'marginRight': '10%'});
    var postcom = $("<p></p>");
    postcom.text("Post");
    postcom.css({'display': 'inline-block', 'cursor': 'pointer'});

    postcom.click(function(){
        var stat = sessionStorage.getItem("loginstatus");
        if(stat !== "true"){
            window.alert("Log in to comment");
        }
        else{
            username = sessionStorage.getItem("usrnm");
            var comdata = comment.val();
            if(comdata == ""){
                return;
            }
            else{
                var com = $("<p></p>");
                com.text(username + ": " + comdata);
                post.append(com);
                comment.val("");
            }
        }
    });

    frm.append(comment);
    frm.append(postcom);
    desc.text("Price: " + ceni[index] + " denari");
    sellername.text("Seller " + Math.floor(Math.random()*500 +1));
    sellername.css({'fontSize':'10', 'paddingTop':'3%'});


    var img = $("<img>");
    img.css({'width':'70%', 'height':'120%'});
    img.attr("src", "products_temp/item" + (index+1) +".jpg");

    let numlikes = Math.floor(Math.random() * 1500 + 1);

    var statusbar = $("<div></div>");
    var likecount = $("<p></p>");
    likecount.text(numlikes + " Likes");
    var like = $("<img>");
    var likestatus = 0;
    like.attr("src", "logos/like-icon.jpg");
    like.css({'width':'auto', 'maxWidth':'5%', 'height':'5%', 'paddingRight': '1%', 'cursor':'pointer'});

    var comimg = $("<img>");
    comimg.attr("src", "logos/comment-icon.jpg");
    comimg.css({'width':'auto', 'maxWidth':'5%', 'height':'5%', 'paddingRight': '1%', 'cursor':'pointer'});

    var comlink = $("<a></a>");
    comlink.attr("href", reviews[index]);
    comlink.append(comimg);

    var tocart = $("<img>");
    tocart.attr("src", "logos/add-to-cart.png");
    tocart.css({'width':'auto', 'maxWidth':'5%', 'height':'5%', 'paddingRight': '1%', 'cursor':'pointer'});
    tocart.click(function(){
        var stat2 = sessionStorage.getItem("loginstatus");
        if(stat2 !== "true"){
            window.alert("Log in to add to cart");
            return;
        }
        else{
            window.alert("Item added to cart");
            selected.push(img.attr('src'));
            console.log(selected.length);
            console.log(img.attr('src'));
            sessionStorage.removeItem("prodarr")
            sessionStorage.setItem("prodarr", JSON.stringify(selected));
        }
        
    });

    statusbar.append(like);
    statusbar.append(comlink);
    statusbar.append(tocart);
    statusbar.append(likecount);

    like.click(function(){
        if(likestatus == 0){
            likecount.text((++numlikes) + " Likes");
            like.attr("src", "logos/liked-icon2.jpg");
            likestatus = 1;
        }
        else{
            likecount.text((--numlikes) + " Likes");
            like.attr("src", "logos/like-icon.jpg");
            likestatus = 0;
        }
    });


    post.append(sellername);
    post.append(img);
    post.append(br);
    post.append(statusbar);
    post.append(desc);
    post.append(frm);

    return post;
}