"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Figure_1 = require("./Figure");
class Triangle extends Figure_1.Figure {
    constructor(color, a, b, c) {
        super(color);
        this.a = a;
        this.b = b;
        this.c = c;
        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error('All sides must be positive');
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Invalid triangle sides');
        }
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
}
exports.Triangle = Triangle;
