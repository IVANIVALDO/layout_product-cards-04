"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Figure_1 = require("./Figure");
class Circle extends Figure_1.Figure {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
        if (radius <= 0) {
            throw new Error('Radius must be positive');
        }
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
exports.Circle = Circle;
