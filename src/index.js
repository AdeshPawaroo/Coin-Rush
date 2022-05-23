import Canvas from "./scripts/canvas.js";
import Player from "./scripts/player.js";

let canvas; 
let background;
let player;
let model;
let keys = [];

document.addEventListener("DOMContentLoaded", function() {
    canvas = new Canvas();
    player = new Player(canvas);
    model = new Image();
    background = new Image();

    background.src = "./src/images/mountain.png";
    model.src = "./src/images/model1.png";

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

    window.addEventListener("keydown", function(e) {
        keys[e.key] = true;
    });

    window.addEventListener("keyup", function(e) {
        delete keys[e.key];
        player.moving = false;
    });

    function drawSprite(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {
        canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
    }

    function animate() {
        canvas.ctx.drawImage(background, 0, 0, 1500, 800);
        drawSprite(model, player.width * player.fX, player.height * player.fY, player.width, player.height, player.x, player.y, player.width + 50, player.height + 50);
        player.walkingAnimation();
        player.move(keys);

        requestAnimationFrame(animate);
    }
});