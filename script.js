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
        document.body.style.fontWeight = "bold";
        let angryMsg = document.createElement("p");
        angryMsg.textContent = "BASS NE MAARA CUTTIIE, MEHNAT NAHI KAROO";
        angryMsg.style.textAlign = "center";
        angryMsg.style.fontSize = "24px";
        document.body.appendChild(angryMsg);
    }

    if (attempts === 5) {
        setTimeout(() => {
            alert("MAARO CUTTIE, CHALLO HAAN KAHI DO MAARA SAATHE AAVVA");
        }, 200);
    }
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    function moveNoButton(e) {
        attempts++;
        moveRandomEl(e.target);
    }

    setInterval(() => {
        if (attempts >= 3) moveRandomEl(moveRandom);
    }, 1000);

    moveRandom.addEventListener("mouseenter", moveNoButton);
    moveRandom.addEventListener("touchstart", moveNoButton);
}
