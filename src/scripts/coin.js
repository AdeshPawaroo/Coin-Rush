export default class Coin {
    constructor() {
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
        this.highScore = localStorage.getItem("highScore");
    }

    generatePos() {
        let currentPos = [x, y];
        while (currentPos[0] === newPos[0] && currentPos[1] === newPos[1]) {
            newPos = positions[Math.floor(Math.random() * positions.length)];
        }
        x = newPos[0];
        y = newPos[1];
        score++;
        document.getElementById("score").innerHTML = "Current Score: " + score;
        rand = Math.floor(Math.random() * 10) + 1;
    }

    resetPos() {
        score = 0;
        document.getElementById("score").innerHTML = "Current Score: " + score;
        x = 500;
        y = 280;
    }

    collected (player) {
        if ((player.x === x || x - 20 === player.x || x - 40 === player.x) && (player.y === y || y - player.y === -20 || y - player.y === 20 || y - player.y === 40 || y - player.y === 60 | y - player.y === 80)) {
            this.generatePos();
        }
    }

    determineHighScore() { 
        if (score > this.highScore) {
            localStorage.setItem("highScore", score)
            this.highScore = localStorage.getItem("highScore");
            document.getElementById("high-score").innerHTML = "High Score: " + this.highScore;
        }
    }
    
    spinningAnimation() {
        if (this.fX < 3) {
            this.fX++;
        }else {
            this.fX = 0;
        }
        document.getElementById("high-score").innerHTML = "High Score: " + this.highScore;
        this.determineHighScore();
        // localStorage.clear();
    };
}