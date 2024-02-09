$(document).ready(function(){
    var usn = sessionStorage.getItem("usrnm");
    console.log(usn);
    $("#h4").text(usn);
    var arr = sessionStorage.getItem("prodarr");
    if(arr.length > 0){
        var cont = JSON.parse(arr);
        console.log(cont.length);
        var items = $("#list");
        items.css("listStyleType", "none");
        for(var i=0; i<cont.length; i++){
            var pic = $("<img>");
            pic.attr("src", cont[i]);
            pic.css({"width": "10%", "height": "10%"});
            var li = $("<li></li>");
            li.append(pic);
            items.append(li);
            console.log(cont[i]);
        }
    }
    else{
        $("#items").text("No items selected");
    }
    
});