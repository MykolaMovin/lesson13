function getCircleLength(radius) {
    return 2 * Math.PI * radius
};

function getCircleArea(radius) {
    return Math.PI * (radius ** 2)
};

console.log(getCircleArea(5), getCircleLength(5))
module.exports = {getCircleLength, getCircleArea};