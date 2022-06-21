import Canvas from "./canvas";

export default class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 32;
        this.height = 48;
        this.fX = 0;
        this.fY = 0;
        this.moving = false;
        this.canvas = new Canvas();
    }

    move(keys) {
        if ((keys["d"] || keys["ArrowRight"]) && this.x < 1040) {
            this.x += 20;
            this.fY = 2;
            this.moving = true;
        }
        if ((keys["a"] || keys["ArrowLeft"]) && this.x > 0) {
            this.x -= 20;
            this.fY = 1;
            this.moving = true;
        }
        if ((keys["w"] || keys["ArrowUp"]) && this.y > 0) {
            console.log("here");
            this.y -= 20;
            this.fY = 3 
            this.moving = true
        }
        if ((keys["s"] || keys["ArrowDown"]) && this.y < 500) {
            this.y += 20;
            this.fY = 0
            this.moving = true
        }
        console.log(this.x, "x");
        console.log(this.y, "y");
    }

    resetPlayer() {
        this.x = 0;
        this.y = 0;
        this.fX = 0;
        this.fY = 0;
    }

    walkingAnimation() {
        if (this.fX < 3 && this.moving) {
            this.fX++;
        }else {
            this.fX = 0;
        }
    }
}