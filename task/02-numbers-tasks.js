'use strict';

function getRectangleArea(width, height) {
    return width * height;
}

function getCicleCircumference(radius) {
    return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
    return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.hypot((x2 - x1), (y2 - y1));
}

function getLinearEquationRoot(a, b) {
    return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
    return Math.acos(
        (x1 * x2 + y1 * y2) / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2))
    );
}

function getLastDigit(value) {
    return value % 10;
}

function parseNumberFromString(value) {
    return Number.parseFloat(value);
}

function getParallelipidedDiagonal(a,b,c) {
    return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
    return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n <= 3) {
        return true;
    } else if (!(n % 2) || !(n % 3)) {
        return false;
    }

    let i = 5;
    while (i * i <= n) {
        if (!(n % i) || !(n % (i + 2))) {
            return false;
        }
        i += 6;
    }
    return true;
}

function toNumber(value, def) {
    return +value ? +value : def;
}

module.exports = {
    getRectangleArea: getRectangleArea,
    getCicleCircumference: getCicleCircumference,
    getAverage: getAverage,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    getLinearEquationRoot: getLinearEquationRoot,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getLastDigit: getLastDigit,
    parseNumberFromString: parseNumberFromString,
    getParallelipidedDiagonal: getParallelipidedDiagonal,
    roundToPowerOfTen: roundToPowerOfTen,
    isPrime: isPrime,
    toNumber: toNumber
};
