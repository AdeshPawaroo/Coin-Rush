export default class Gem {
    constructor() {
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
    }

    generatePos() {
        let currentPos = [x, y];
        while (currentPos[0] === newPos[0] && currentPos[1] === newPos[1]) {
            newPos = positions[Math.floor(Math.random() * positions.length)];
        }
        x = newPos[0];
        y = newPos[1];
        score = score + 2;
        document.getElementById("score").innerHTML = "Current Score: " + score;
        rand = Math.floor(Math.random() * 10) + 1;
        if (endurance === true) {
            document.getElementById("timer").innerHTML = parseInt(document.getElementById("timer").innerHTML) + 2;
        }
    }

    resetPos() {
        score = 0
        document.getElementById("score").innerHTML = "Current Score: " + score;
        x = 500;
        y = 280;
    }

    collected (player) {
        if ((player.x === x || x - 20 === player.x || x - 40 === player.x) && (player.y === y || y - player.y === -20 || y - player.y === 20 || y - player.y === 40 || y - player.y === 60 || y - player.y === 80)) {
            this.generatePos();
        }
    }

    determineHighScore() {
        highScore = localStorage.getItem("highScore");
        enduranceHighScore = localStorage.getItem("enduranceHighScore");
        if (endurance === false) {
            if (highScore === null) {
                document.getElementById("high-score").innerHTML = "High Score: " + 0;
            }else {
                document.getElementById("high-score").innerHTML = "High Score: " + highScore;
            }
            if (score > highScore) {
                localStorage.setItem("highScore", score);
            }
        }else {
            if (enduranceHighScore === null) {
                document.getElementById("high-score").innerHTML = "Endurance High Score: " + 0;
            }else {
                document.getElementById("high-score").innerHTML = "Endurance High Score: " + enduranceHighScore;
            }
            if (score > enduranceHighScore) {
                localStorage.setItem("enduranceHighScore", score);
            }
        }
    }

    // determineHighScore() { 
    //     highScore = localStorage.getItem("highScore");
    //     if (highScore === null) {
    //         document.getElementById("high-score").innerHTML = "High Score: " + 0;
    //     }
    //     if (score > highScore) {
    //         localStorage.setItem("highScore", score)
    //         highScore = localStorage.getItem("highScore");
    //         document.getElementById("high-score").innerHTML = "High Score: " + highScore;
    //     }
    // }
    
    spinningAnimation() {
        if (this.fX < 3) {
            this.fX++;
        }else {
            this.fX = 0;
        }
        // document.getElementById("high-score").innerHTML = "High Score: " + highScore;
        // if (endurance === true) {
        //      document.getElementById("high-score").innerHTML = "Endurance High Score: " + enduranceHighScore;
        // }
        this.determineHighScore();
    };
}