export default class Coin {
    constructor() {
        this.x = 500;
        this.y = 280;
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
        this.positions = [
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
        this.highScore = localStorage.getItem("highScore");
    }

     generatePos() {
        let currentPos;
        let newPos;
        newPos = this.positions[Math.floor(Math.random() * this.positions.length)];
        while (newPos === currentPos) {
            newPos = this.positions[Math.floor(Math.random() * this.positions.length)];
        } 
        this.x = newPos[0];
        this.y = newPos[1];
        score++;
        document.getElementById("score").innerHTML = "Current Score: " + score;
        rand = Math.floor(Math.random() * 10) + 1;
    }

    resetPos() {
        score = 0;
        document.getElementById("score").innerHTML = "Current Score: " + score;
        this.x = 500;
        this.y = 280;
    }

    collected (player) {
        if ((player.x === this.x || this.x - 20 === player.x || this.x - 40 === player.x) && (player.y === this.y || this.y - player.y === -20 || this.y - player.y === 20 || this.y - player.y === 40 || this.y - player.y === 60 ||this.y - player.y === 80)) {
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