'use strict';

function concatenateStrings(value1, value2) {
    return value1 + value2;
}

function getStringLength(value) {
    return value.length;
}

function getStringFromTemplate(firstName, lastName) {
    return 'Hello, ' + firstName+ ' ' + lastName + '!';
}

function extractNameFromTemplate(value) {
    return value.slice(7, value.length-1);
}

function getFirstChar(value) {
    return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

function repeatString(value, count) {
    return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
    return str.replace(value,'');
}


function unbracketTag(str) {
    return str.slice(1,str.length-1);
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    return str.split(';');
}

function getRectangleString(width, height) {
    return '┌'+'─'.repeat(width - 2)+'┐\n' +
        ('│' + ' '.repeat(width - 2) + '│\n').repeat(height - 2) +
        '└' + '─'.repeat(width - 2) + '┘\n';
}

function encodeToRot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
    const cards = [
        'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
        'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
        'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
        'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ];
    return cards.indexOf(value);
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
