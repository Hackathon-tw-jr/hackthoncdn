//navbar
function nav_open() {
    let x = document.getElementById("Links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function card_click(){
    $("#card").toggleClass("card_click").delay(5000).toggleClass('card');
    $("#env_bot,#env_top").toggleClass("env_left");
}