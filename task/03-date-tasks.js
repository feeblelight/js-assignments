'use strict';

function parseDataFromRfc2822(value) {
    return new Date(value);
}

function parseDataFromIso8601(value) {
    return new Date(value);
}

function isLeapYear(date) {
    if ((date.getFullYear() % 4 == 0 && (date.getFullYear() % 100 != 0)) || date.getFullYear() % 400 == 0)
        return true;
    return false;
}

function timeSpanToString(startDate, endDate) {
   //throw new Error('Not implemented');
    return (new Date(endDate - startDate)).toISOString().slice(11, -1);
}

function angleBetweenClockHands(date) {
    //throw new Error('Not implemented');
    let h = new Date(date).getUTCHours();
    h = h % 12;
    let min = new Date(date).getUTCMinutes();
    let angle = Math.abs(1/2 * (60 * h - 11 * min));
    if (angle > 180) {
        angle = (360 - angle);
    }
    return angle / 180 * Math.PI;
}

module.exports = {
    parseDataFromRfc2822: parseDataFromRfc2822,
    parseDataFromIso8601: parseDataFromIso8601,
    isLeapYear: isLeapYear,
    timeSpanToString: timeSpanToString,
    angleBetweenClockHands: angleBetweenClockHands
};
