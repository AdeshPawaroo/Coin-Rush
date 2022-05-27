export default class Coin {
    constructor() {
        this.x = 520;
        this.y = 272;
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
        this.positions = [
            [70, 52],
            [320, 52],
            [520, 52],
            [740, 52],
            [980, 52],

            [70, 272],
            [320, 272],
            [520, 272],
            [740, 272],
            [980, 272],

            [70, 520],
            [320, 520],
            [520, 520],
            [740, 520],
            [980, 520],
        ];
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
        this.score++;
    }
    
    collected(player) {
        if (player.x === this.x || player.x - this.x === -20 || player.x - this.x === 20 || player.x - this.x === 10 || player.x - this.x === -10) {
            this.generatePos();
        }
        if (player.y === this.y || player.y - this.y === -20 || player.y - this.y === 20 || player.y - this.y === -40) {
                this.generatePos();
        }
    }

    spinningAnimation() {
        if (this.fX < 3) {
            this.fX++;
        }else {
            this.fX = 0;
        }
    }
}