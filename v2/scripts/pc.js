// ie check
let ua = window.navigator.userAgent;
if ((ua.indexOf('MSIE ') > -1) || (ua.indexOf('Trident/') > -1)) {
    window.location.href="error.html";
}

function card_click(){
    $("#card").toggleClass("card_click").delay(5000).toggleClass('card');
    $("#env_bot,#env_top").toggleClass("env_left");
}

// click

// scroll lock
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// click main

function on_judge() {
    document.getElementById("overlay_judge").style.display = "block";
    disableScroll();
}

function off_judge() {
    document.getElementById("overlay_judge").style.display = "none";
    enableScroll();
}

function on_vote() {
    document.getElementById("overlay_vote").style.display = "block";
    disableScroll();
}

function off_vote() {
    document.getElementById("overlay_vote").style.display = "none";
    enableScroll();
}