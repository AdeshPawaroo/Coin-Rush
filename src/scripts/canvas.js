export default class Canvas {
    constructor() {
        this.canvas = document.getElementsByClassName("game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
}