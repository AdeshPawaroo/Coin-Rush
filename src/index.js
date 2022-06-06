import Canvas from "./scripts/canvas.js";
import Player from "./scripts/player.js";
import Coin from "./scripts/coin";
import Gem from "./scripts/gem"

let canvas, background, player, model, coin, coinImg, gem, gemImg, timer, playing, interval;
let fps, fpsInterval, startTime, now, then, elapsed;
let keys = [];

document.addEventListener("DOMContentLoaded", function() {
    canvas = new Canvas();
    player = new Player(canvas);
    model = new Image();
    background = new Image();
    coin = new Coin();
    coinImg = new Image();
    gem = new Gem();
    gemImg = new Image();
    timer = document.getElementById("timer");
    playing = false;
    window.score = 0;
    window.rand = Math.floor(Math.random() * 10) + 1;
    window.positions = [
        [60, 60],
        [280, 60],
        [500, 60],
        [720, 60],
        [940, 60],

        [60, 280],
        [280, 280],
        [500, 280],
        [720, 280],
        [940, 280],

        [60, 500],
        [280, 500],
        [500, 500],
        [720, 500],
        [940, 500],
    ];
    window.newPos =  positions[Math.floor(Math.random() * positions.length)];
    window.x = 500;
    window.y = 280;

    background.src = "./src/images/industrial.png";
    model.src = "./src/images/model1.png";
    coinImg.src = "./src/images/coin1.png";
    gemImg.src = "./src/images/gem.png";

    document.getElementById("start-button").addEventListener("click", function() {
        document.getElementById("splash-page").style.display = "none";
        document.getElementById("game-canvas-container").style.display = "flex";
        playing = true;
        startAnimating(10);
        interval = setInterval(tickDown, 1000);
    });

    document.getElementById("background-btn-1").addEventListener("click", function() {
        background.src = "./src/images/industrial.png";
    });

    document.getElementById("background-btn-2").addEventListener("click", function() {
        background.src = "./src/images/urban.png";
    });

    document.getElementById("background-btn-3").addEventListener("click", function() {
        background.src = "./src/images/mountain.png";
    });

    document.getElementById("char-btn-1").addEventListener("click", function() {
        model.src = "./src/images/model1.png"
    });

     document.getElementById("char-btn-2").addEventListener("click", function() {
        model.src = "./src/images/model2.png"
    });

     document.getElementById("char-btn-3").addEventListener("click", function() {
        model.src = "./src/images/model3.png"
    });

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
    
    function drawCoin(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {
        canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
    }

    function drawGem(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight) {
        canvas.ctx.drawImage(image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
    }

    function startAnimating(fps) {
        if (playing === true) {
            fpsInterval = 800 / fps;
            then = Date.now();
            startTime = then;
            animate();
        }
    }

    function restartGame() {
        document.getElementById("splash-page").style.display = "block";
        document.getElementById("game-canvas-container").style.display = "none";
        clearInterval(interval);
        timer.innerHTML = 6;
        coin.resetPos();
        gem.resetPos();
        player.resetPlayer();
    }

    function tickDown() {
        if (playing === true && timer.innerHTML > 0) {
            timer.innerHTML--;
        }else {
            playing = false;
            restartGame();
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval && playing) {
            then = now - (elapsed % fpsInterval);
            canvas.ctx.drawImage(background, 0, 0, 1120, 600);
            drawSprite(model, player.width * player.fX, player.height * player.fY, player.width, player.height, player.x, player.y, player.width + 50, player.height + 50);
            player.walkingAnimation();
            player.move(keys);
            if (rand >= 7) {
                drawGem(gemImg, gem.width * gem.fX, gem.height * gem.fY, gem.width, gem.height, x, y, gem.width + 30, gem.height + 30);
                gem.spinningAnimation();
                gem.collected(player); 
            }else {
                drawCoin(coinImg, coin.width * coin.fX, coin.height * coin.fY, coin.width, coin.height, x, y, coin.width + 30, coin.height + 30);
                coin.spinningAnimation();
                coin.collected(player);
            }
        }
    } 
});