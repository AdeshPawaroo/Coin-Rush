import Canvas from "./scripts/canvas.js";

let canvas; 
let background;

document.addEventListener("DOMContentLoaded", function() {
    canvas = new Canvas();

    background = new Image();
    background.src = "./src/images/mountain.png";

    document.getElementById("background-btn-1").addEventListener("click", function() {
        background.src = "./src/images/industrial.png";
    });

    document.getElementById("background-btn-2").addEventListener("click", function() {
        background.src = "./src/images/urban.png";
    });

    document.getElementById("background-btn-3").addEventListener("click", function() {
        background.src = "./src/images/mountain.png";
    });

    animate();

    function animate() {
        canvas.ctx.drawImage(background, 0, 0, 1500, 800);

        requestAnimationFrame(animate);
    }
});