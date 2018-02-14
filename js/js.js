var img = ["../img/hartjeroze.png", "../img/hartjeroze.png"]

var ja = document.getElementById("likebutton");
ja.style.backgroundImage = "url('/img/hartjeroze.png')";

ja.addEventListener("click", function () {
    if (ja.style.backgroundImage == "url('/img/hartjeroze.png')") {
        ja.style.backgroundImage = "url('/img/hartjerozefocus.png')";
    } else {
        ja.style.backgroundImage = "url('/img/hartjeroze.png')";
    }
});

//ja.addEventListener("click", function () {
//            //  if (ja.style.content.match("focus")) {
//            if (ja.style.content !== "url('../img/hartjeroze.png')" {
//                    ja.style.content = "url('../img/hartjerozefocus')";
//                } else {
//                    ja.style.content = "url(''../img/hartjeroze.png')";
//                }
//            });