"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Triangle = void 0;
exports.getInfo = getInfo;
class Triangle {
}
exports.Triangle = Triangle;
class Circle {
}
exports.Circle = Circle;
class Rectangle {
}
exports.Rectangle = Rectangle;
function getInfo(figure) {
    return typeof figure;
}
