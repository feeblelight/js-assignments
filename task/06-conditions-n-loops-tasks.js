'use strict';

function getFizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0)
        return 'FizzBuzz';
    else
    if (num % 3 == 0)
        return 'Fizz';
    else
    if (num % 5 == 0)
        return 'Buzz';
    else
        return num;
}

function getFactorial(n) {
    if (n < 0)
        return -1;
    else if (n === 0)
        return 1;
    else {
        return (n * getFactorial(n - 1));
    }
}

function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++)
    {
        sum += i;
    }
    return sum;
}

function isTriangle(a,b,c) {
    return a < b + c && b < a + c && c < a + b;
}

function doRectanglesOverlap(rect1, rect2) {
    return (Math.max(rect1.left, rect2.left) <= Math.min(rect1.left + rect1.width, rect2.left + rect2.width) && Math.max(rect1.top, rect2.top) <=
        Math.min(rect1.top + rect1.height, rect2.top + rect2.height));
}

function isInsideCircle(circle, point) {
    let dx = point.x - circle.center.x;
    let dy = point.y - circle.center.y;
    return (dx*dx + dy*dy) < (circle.radius * circle.radius);
}

function findFirstSingleChar(str) {
    let charArr = [];
    let countArr = [];
    let isExst;
    for (let i = 0; i < str.length; i++)
    {
        isExst = false;
        if (charArr.indexOf(str[i]) != -1)
        {
            isExst = true;
            countArr[charArr.indexOf(str[i])] += 1;
        }
        if (!isExst)
        {
            charArr.push(str[i]);
            countArr.push(1);
        }
    }
    for (let i = 0; i<countArr.length; i++)
    {
        if (countArr[i] == 1)
            return charArr[i];
    }
    return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let tempStr = '';
    let tempEndStr = '';
    if (isStartIncluded)
        tempStr = '[';
    else
        tempStr = '(';
    if (isEndIncluded)
        tempEndStr = ']';
    else
        tempEndStr = ')';
    if(a > b)
    {
        tempStr += b + ', ' + a + tempEndStr;
    }
    else
    {
        tempStr += a + ', ' + b + tempEndStr;
    }
    return tempStr;

}

function reverseString(str) {
    return [...str].reverse().join('');
}

function reverseInteger(num) {
    let str = '';
    str += num;
    return [...str].reverse().join('');
}

function isCreditCardNumber(ccn) {
    ccn = [...String(ccn)].reverse();
    ccn = ccn.reduce(function(sum, val, ind)
    {
        let dig = Number(val);
        if(ind % 2)
            dig *= 2;
        sum += Math.floor(dig / 10);
        sum += dig % 10;
        return sum;
    }, 0);
    return (ccn * 3) % 10 == 0;
}

function getDigitalRoot(num) {
    do{
        let sum = 0;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }while(num > 9);
    return num;
}

function isBracketsBalanced(str) {
    let pair = {
        '>': '<',
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let res = [...str].reduce(function(acc, x, ind)
    {
        if (['(', '{', '[', '<'].indexOf(x) != -1)
            acc.push(x);
        else
        {
            if (acc.length > 0 && acc[acc.length - 1] == pair[x])
                acc.pop();
            else
                acc.push(x);
        }
        return acc;
    }, []);
    return res.length == 0;
}

function timespanToHumanString(startDate, endDate) {
    let ms_in = {
        s:  1000,
        m:  60000,
        h:  3600000,
        d:  86400000,
        mn: 2592000000,
        y:  31104000000
    }
    function rnd(x){
        return -Math.round(-x);
    }
    let t = endDate.getTime() - startDate.getTime();
    if (t >= 546 * ms_in.d)
        return rnd(t/ms_in.y) + ' years ago';
    else
    if(345 * ms_in.d < t && t <= 545  * ms_in.d)
        return 'a year ago';
    else
    if(45 * ms_in.d < t && t <= 345 * ms_in.d)
        return rnd(t/ms_in.mn) + ' months ago';
    else
    if(25 * ms_in.d < t && t <= 45 * ms_in.d)
        return 'a month ago';
    else
    if(36 * ms_in.h < t && t <= 25 * ms_in.d)
        return rnd(t/ms_in.d) + ' days ago';
    else
    if(22 * ms_in.h < t && t <= 36 * ms_in.h)
        return 'a day ago';
    else
    if(90 * ms_in.m < t && t <= 22 * ms_in.h)
        return rnd(t/ms_in.h) + ' hours ago';
    else
    if(45 * ms_in.m < t && t <= 90 * ms_in.m)
        return 'an hour ago';
    else
    if(90 * ms_in.s < t && t <= 45 * ms_in.m)
        return rnd(t/ms_in.m) + ' minutes ago';
    else
    if(45 * ms_in.s < t && t <= 90 * ms_in.s)
        return 'a minute ago';
    else
        return 'a few seconds ago';
}

function toNaryString(num, n) {
    return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
    throw new Error('Not implemented');         ///??????????
}

function getMatrixProduct(m1, m2) {
    let n = m1.length, m = m2[0].length;
    let ans = new Array(n);
    for (let i=0; i < n; i++)
    {
        ans[i]=new Array(m);
    }
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            ans[i][j]=0;

    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++)
            for(let k = 0; k < m1[0].length; k++)
                ans[i][j] += m1[i][k] * m2[k][j];
    return ans;
}

function evaluateTicTacToePosition(position) {
    for (let i = 0; i < position.length; i++)
    {
        if ((position[i][0] === position[i][1]) && (position[i][0] === position[i][2]) && (typeof position[i][0] != 'undefined'))
            return position[i][0];
    }
    let fl1 = true, fl2 = true;
    for (let x = 1; x < position.length; x++)
    {
        if (position[x][x] !== position[0][0])
            fl1 = false;
        if (position[x][position.length - 1 - x] !== position[0][2])
            fl2 = false;
    }
    if (fl1 && typeof position[0][0] != undefined)
        return position[0][0];
    if (fl2 && typeof position[0][2] != undefined)
        return position[0][2];

    for (let i = 0; i < position.length; i++) {
        if ((position[0][i] === position[1][i]) && (position[0][i] === position[2][i]) && (typeof position[0][i] !== 'undefined'))
            return position[0][i];
    }
    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
