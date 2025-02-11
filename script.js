let speed = 80;
let size = 100;
let attempts = 0;

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * speed) + "%";
    elm.style.left = Math.floor(Math.random() * speed) + "%";

    size -= 10;
    if (size < 30) size = 30;
    elm.style.fontSize = size + "%";

    speed = Math.max(speed - 10, 50);

    if (attempts === 3) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
