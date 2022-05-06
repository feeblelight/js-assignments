'use strict';

function getRegexForGuid() {
    let reg = '[0-9a-f]';
    return new RegExp('^{'+reg+'{8}-'+reg+'{4}-'+reg+'{4}-'+reg+'{4}-'+reg+'{12}}$', 'i');
}

function getRegexForPitSpot() {
    return new RegExp(/.*p.t.*/);
}

function getRegexForIPv4() {
    return /^(([0-2][0-9]{2}|[0-9]{1,2})\.){3}([0-2][0-9]{2}|[0-9]{1,2})$/;
}

function getRegexForSSN() {
    return /\d{2}[1-9]-\d{1}[1-9]-\d{3}[1-9]/;
}

function getPasswordValidator(minLength) {
    return new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{'+minLength+',}');
}

module.exports = {
    getRegexForGuid: getRegexForGuid,
    getRegexForPitSpot: getRegexForPitSpot,
    getRegexForIPv4: getRegexForIPv4,
    getRegexForSSN: getRegexForSSN,
    getPasswordValidator: getPasswordValidator
};
