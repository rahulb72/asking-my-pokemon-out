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
    if (speed < 30) {
        speed = 80; 
    }

    if (attempts === 3) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.fontWeight = "bold";
        document.body.innerHTML += "<p style='text-align:center; font-size: 24px;'>Bass nee POKEMONN, haan kaii do ne</p>";
    }

    if (attempts === 5) {
        alert("Bass nee POKEMONN, haan kaii do ne");
    }
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    function moveNoButton(e) {
        attempts++;
        if (attempts > 5) {
            alert("naa dabavsoo ne NO ne, YES kari do (muaahh muaahh)");
        }
        moveRandomEl(e.target);
    }

    moveRandom.addEventListener("mouseenter", moveNoButton);
    moveRandom.addEventListener("touchstart", moveNoButton);
}
