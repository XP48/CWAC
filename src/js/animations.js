var elem = document.getElementsByTagName('p')

function addAnim(i) {
    if(i%2==0) {
        elem[i].style.animation = "popleft 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both 1s";
    }
    else {
        elem[i].style.animation = "popright 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both 1s";
    }
}

function applyAnimation(i) {
    if (i < 10) {
        addAnim(i);
        i++;
        setTimeout(function() {
            applyAnimation(i);
        }, 500);
    }
}
function activateMessage() {
    document.querySelector("html").style.overflowY = "auto";
    for(i=0; i<10; i++) {
        elem[i].style.animation = "";
    }
    applyAnimation(0);
}
