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

    speed -= 10;
    if (speed < 30) speed = 50;

    if (attempts === 3) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.fontWeight = "bold";
        document.body.innerHTML += "<p style='text-align:center; font-size: 24px;'>Bass ne POKEMONN, PLEASE HAAN KAHI DO NE</p>";
    }

    if (attempts === 5) {
        setTimeout(() => {
            alert("SAY YES TO ME LOVEE");
        }, 500);
    }
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    function moveNoButton(e) {
        attempts++;
        moveRandomEl(e.target);
    }

    moveRandom.addEventListener("mouseenter", moveNoButton);
    moveRandom.addEventListener("touchstart", moveNoButton);
}
