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
