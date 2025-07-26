"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Figure_1 = require("./Figure");
class Rectangle extends Figure_1.Figure {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive');
        }
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
