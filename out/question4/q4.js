"use strict";
let baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
var Week;
(function (Week) {
    Week[Week["SUN"] = 0] = "SUN";
    Week[Week["MON"] = 1] = "MON";
    Week[Week["TUE"] = 2] = "TUE";
})(Week || (Week = {}));
let day = Week[0];
console.log(Week);
