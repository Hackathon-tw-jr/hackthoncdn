// ie check
let ua = window.navigator.userAgent;
if ((ua.indexOf('MSIE ') > -1) || (ua.indexOf('Trident/') > -1)) {
    window.location.href="error.html";
}

function card_click(){
    $("#card").toggleClass("card_click").delay(5000).toggleClass('card');
    $("#env_bot,#env_top").toggleClass("env_left");
}
