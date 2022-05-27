export default class Coin {
    constructor() {
        this.x = 400;
        this.y = 232;
        this.fX = 0;
        this.fY = 0;
        this.width = 16;
        this.height = 16;
        // this.positions = [
        //     [0, 0]
        // ];
          this.positions = [
            [84, 650],
            [84, 270],
            [84, 12],``
            [372, 650], 
            [372, 270],
            [372, 12],
            [684, 650],
            [684, 270],
            [684, 12],
            [1014,650],
            [1014, 270],
            [1014, 12],
            [1296, 650],
            [1296, 270],
            [1296, 12]
        ];
    }

    spinningAnimation() {
        if (this.fX < 3) {
            this.fX++;
        }else {
            this.fX = 0;
        }
    }
}