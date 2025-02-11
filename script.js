let speed = 80; // Start movement range
let size = 100; // Button size percentage
let attempts = 0; // Track how many times she tries to click "No"

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * speed) + "%";
    elm.style.left = Math.floor(Math.random() * speed) + "%";

    // Make the "No" button smaller each time
    size -= 10; 
    if (size < 30) size = 30; // Minimum size
    elm.style.fontSize = size + "%"; 

    // Decrease speed, but reset if too low
    speed -= 10;
    if (speed < 30) {
        speed = 80; 
    }

    // Activate "Angry Mode" after 3 tries
    if (attempts === 3) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.fontWeight = "bold";
        document.body.innerHTML += "<p style='text-align:center; font-size: 24px;'>😡 STOP PLAYING! JUST SAY YES! 😡</p>";
    }

    // Super Angry Mode after 5 tries
    if (attempts === 5) {
        alert("ENOUGH! YOU HAVE TO SAY YES NOW! 😡🔥");
    }
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    function moveNoButton(e) {
        attempts++; // Increase attempts count
        if (attempts > 5) {
            alert("BRO, WHY ARE YOU STILL CLICKING NO?! 😡🔥");
        }
        moveRandomEl(e.target);
    }

    // Works on both PC (hover) & Mobile (tap)
    moveRandom.addEventListener("mouseenter", moveNoButton); // PC hover
    moveRandom.addEventListener("touchstart", moveNoButton); // Mobile tap
}
