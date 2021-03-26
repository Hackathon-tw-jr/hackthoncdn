// ie check
let ua = window.navigator.userAgent;
if ((ua.indexOf('MSIE ') > -1) || (ua.indexOf('Trident/') > -1)) {
    window.location.href="error.html";
}

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