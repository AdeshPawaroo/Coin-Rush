export default class Coin {
    constructor() {
        // this.x = 520;
        // this.y = 272;
        this.x = 60;
        this.y = 52;
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
        this.positions = [
            [60, 52],
            [280, 52],
            [500, 52],
            [720, 52],
            [940, 52],

            [60, 272],
            [280, 272],
            [500, 272],
            [720, 272],
            [940, 272],

            [60, 520],
            [280, 520],
            [500, 520],
            [720, 520],
            [940, 520],
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

    collected (player) {
        console.log(player.x, player.y, "player x y");
        console.log(this.x, this.y, "this x y");
        if (player.x === this.x && player.y === this.y) {
            this.generatePos();
        }
    }
    
    // collected(player) {


    //1100 -> 1120
    //60 margin on each side
    // 1100 / 5 = where coins will be on x axis (220)

    //x done
    
    //600 -> ?




    //     //80 60 40
    //     //72 52 32 12
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 12) {
    //         this.generatePos();
    //     }

    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 12) {
    //         this.generatePos();
    //     }

    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 12) {
    //         this.generatePos();
    //     }


    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 80 && player.y === 12) {
    //         this.generatePos();
    //     }

    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 60 && player.y === 12) {
    //         this.generatePos();
    //     }

    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 72) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 52) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 32) {
    //         this.generatePos();
    //     }
    //     if ((this.x === 70 && this.y === 52) && player.x === 40 && player.y === 12) {
    //         this.generatePos();
    //     }
    // }
    //     //520 272
        
    //     //y
    //     //192 212 232 252 292
    //     //x
    //     //480 500 

    //     //70 520

    //     //y

    //     //x

    //     // if ((player.x === this.x && player.y === this.y) || ((player.x - this.x === -40 || player.x - this.x === -20) && (player.y - this.y === 20 || player.x - this.x === -20 || player.x - this.x === -40 || player.x - this.x === -60 || player.x - this.x === -80))) {
    //     //     this.generatePos();
    //     // }





    //     // if (player.x === this.x || player.x - this.x === -20 || player.x - this.x === 20 || player.x - this.x === 10 || player.x - this.x === -10) {
    //     //     this.generatePos();
    //     // }
    //     // if (player.y === this.y || player.y - this.y === -20 || player.y - this.y === 20 || player.y - this.y === -40) {
    //     //         this.generatePos();
    //     // }

    // //     if (player.x === this.x) {
    // //         this.generatePos();
    // //     }else if (player) {
    // //         this.generatePos();
    // //     }else if (player.x - this.x === -20) {
    // //         this.generatePos();
    // //     }else if (player.x - this.x === 20) {
    // //         this.generatePos();
    // //     }else if (player.x - this.x === -10) {
    // //         this.generatePos();
    // //     }else if (player.x - this.x === 10) {
    // //         this.generatePos();
    // //     }else if (player.y === this.y) {
    // //         this.generatePos();
    // //     }else if (player.y - this.y === -20) {
    // //         this.generatePos();
    // //     }else if (player.y - this.y === 20) {
    // //         this.generatePos();
    // //     }else if (player.y - this.y === -40) {
    // //         this.generatePos();
    // //     }

    spinningAnimation() {
        if (this.fX < 3) {
            this.fX++;
        }else {
            this.fX = 0;
        }
    }
}