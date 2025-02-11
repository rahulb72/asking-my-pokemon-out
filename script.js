let speed = 80; 
let attempts = 0; 

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * speed) + "%";
    elm.style.left = Math.floor(Math.random() * speed) + "%";

    speed -= 10;
    if (speed < 30) {
        speed = 50; 
    }
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    function moveNoButton(e) {
        attempts++;

        if (attempts % 5 === 0) {
            alert("YESS chh kahi do ne havve Pokemonn😜");
        }

        moveRandomEl(e.target);
    }

    moveRandom.addEventListener("mouseenter", moveNoButton); 
    moveRandom.addEventListener("touchstart", moveNoButton); 
}
