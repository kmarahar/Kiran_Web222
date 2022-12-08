function revealOther() {
    var checkBox = document.getElementById("other-radio");

    var otherDiv = document.getElementById("other");


    if (checkBox.checked == true){
        otherDiv.style.display = "block";
    } else {
        otherDiv.style.display = "none";
    }
}

var menuOpen = false;

function responsiveMenu() {
    var nav = document.querySelector("nav");

    if (menuOpen) {
        nav.style.width = "60%";
        nav.style.display = "none";
    } else {
        nav.style.width = "100%";
        nav.style.display = "block";
    }

    menuOpen = !menuOpen;
}