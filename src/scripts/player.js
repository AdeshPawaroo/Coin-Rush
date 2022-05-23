export default class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 32;
        this.height = 48;
        this.fX = 0;
        this.fY = 0;
        this.moving = false;
    }

    move(keys) {
        if ((keys["d"] || keys["ArrowRight"]) && this.x < 1020) {
            this.x += 6;
            this.fY = 2;
            this.moving = true;
        }
        if ((keys["s"] || keys["ArrowLeft"]) && this.x > 0) {
            this.x -= 6;
            this.fY = 1;
            this.moving = true;
        }
        if (keys["w"] && this.y > 12) {
            this.y -= 6;
            this.moving = true
        }
        if (keys["s"] && this.y < 600) {
            this.y += 6;
            this.moving = true
        }
    }


    walkingAnimation() {
        if (this.fX < 3 && this.moving) {
            this.fX++;
        }else {
            this.fX = 0;
        }
    }
}