const body = document.querySelector("body");

const IMG_NUMBER = 3;
let randomNumber;


function paintImage(imgNmber) {
    const image = new Image();
    image.src = `./image/${randomNumber + 1}.jpg` 
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    randomNumber = genRandom();
    paintImage(randomNumber);
}

init();