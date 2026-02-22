function areaRectungle (width,height) {
    return width * height;
}
console.log("Declaration:", areaRectungle(5, 10)); // 50


const areaRectungle1 = function (width,height) {
    return width * height;
}
console.log("Expression:", areaRectungle1(3, 10)); // 30


const areaRectungle2 =  (width, height) => width * height;
console.log("Arrow:", areaRectungle2(4, 10)); // 40
