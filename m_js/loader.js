// loader
$(document).ready(function () {
    let readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete"){
            $('body').addClass('loaded');
            $('h1').css('color', '#222222');
            clearInterval(readyStateCheckInterval);
        }
    }, 100);
});

//navbar
function nav_open() {
    let x = document.getElementById("Links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}