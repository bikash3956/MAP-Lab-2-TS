"use strict";
class Shape {
    constructor(type) {
        this.type = type;
    }
}
class Rectangle extends Shape {
    constructor(width, length, type) {
        super(type);
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
    setWidth(width) {
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
    setLength(length) {
        this.length = length;
    }
    getLength() {
        return this.length;
    }
}
let rectangle = new Rectangle(4, 5, 'Rectangle');
rectangle.setWidth(5);
rectangle.setLength(2);
rectangle.calcSize = function () {
    return this.getWidth() * this.getLength();
};
console.log(rectangle.calcSize()); // 10
