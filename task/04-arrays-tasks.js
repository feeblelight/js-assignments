'use strict';

function findElement(arr, value) {
   return arr.indexOf(value);
}

function generateOdds(len) {
   let arr = new Array(len);
   arr.fill(1);
   return arr.map((elem, index) =>
   {
      return elem = index*2 + 1;
   });
}

function doubleArray(arr) {
   arr.map(elem =>
   {
      return arr.push(elem);
   });
   return arr;
}

function getArrayOfPositives(arr) {
   return arr.filter((item, i, arr) => item > 0);
}

function getArrayOfStrings(arr) {
   return arr.filter(elem => typeof elem === 'string' || elem instanceof String);
}

function removeFalsyValues(arr) {
   return arr.filter((item, i, arr) => !!item);
}

function getUpperCaseStrings(arr) {
   return arr.map(elem =>
   {
      return elem.toUpperCase();
   });
}

function getStringsLength(arr) {
   return arr.map((item, i, arr) => item.length);
}

function insertItem(arr, item, index) {
   return arr.splice(index, 0, item);
}

function getHead(arr, n) {
   return arr.slice(0, n);
}

function getTail(arr, n) {
   return arr.splice( -n);
}

function toCsvText(arr) {
   let arrStr = arr.map((elem, index) =>
   {
      if (index != arr.length-1)
         return elem.join(',') + '\n';
      else
         return elem.join(',');
   }).join('');
   return arrStr;
}

function toArrayOfSquares(arr) {
   return arr.map((item, i, arr) => item ** 2);
}

function getMovingSum(arr) {
   let sum = 0;
   return arr.map((elem) =>
   {
      elem += sum;
      sum = elem;
      return elem;
   });
}

function getSecondItems(arr) {
   return arr.filter((elem, index) => index % 2);
}

function propagateItemsByPositionIndex(arr) {
   return arr.reduce((acc, elem, index) => acc.concat(
       Array.from({length: index + 1}, () => elem)), []
   );
}

function get3TopItems(arr) {
   return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
   let sum = 0;
   arr.map(elem =>
   {
      if (typeof(elem) == 'number' && elem > 0)
         return sum++;
   });
   return sum;
}

function sortDigitNamesByNumericOrder(arr) {
   const mapped1 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
   const mapped2 = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
   return arr.map(x => mapped2[x]).sort().map(x => mapped1[x]);
}

function getItemsSum(arr) {
   return arr.reduce((acc, elem) => acc + elem, 0)
}

function getFalsyValuesCount(arr) {
   let sum = 0;
   arr.map(elem =>
   {
      if (Boolean(elem) == 0)
         return sum++;
   });
   return sum;
}

function findAllOccurences(arr, item) {
   let num = 0;
   arr.map(elem =>
   {
      if (elem === item)
         return num++;
   })
   return num;
}

function toStringList(arr) {
   return arr.join();
}

function sortCitiesArray(arr) {
   function compareLocation(a, b) {
      if (a.country < b.country) {
         return -1;
      }
      if (a.country > b.country) {
         return 1;
      }
      if (a.country === b.country) {
         if (a.city < b.city) {
            return -1;
         }
         if (a.city > b.city) {
            return 1;
         }
         if (a.city === b.city) {
            return 0;
         }
      }
   }
   return arr.sort(compareLocation);
}

function getIdentityMatrix(n) {
   return Array.from({length: n}, function (elem, index) {
      let row = new Array(n).fill(0, 0, n);
      row[index] = 1;
      return row;
   });
}

function getIntervalArray(start, end) {
   return Array.from({length: end - start + 1}, (elem, index) => index + start);
}

function distinct(arr) {
   let resArr = [];
   arr.map(elem =>
   {
      if (resArr.indexOf(elem) == -1)
         resArr.push(elem);
      return resArr;
   });
   return resArr;
}

function group(array, keySelector, valueSelector) {
   let _map = new Map();
   array.map((x, ind) =>
   {
      if( _map.has(keySelector(x)) )
         _map.get(keySelector(x)).push(valueSelector(x));
      else
         _map.set(keySelector(x), [valueSelector(x)]);
   });
   return _map;
}

function selectMany(arr, childrenSelector) {
   let myArr = [];
   arr.map(elem =>
   {
      myArr.push(...childrenSelector(elem));
   });
   return myArr;
}

function getElementByIndexes(arr, indexes) {
   return indexes.map(elem => arr = arr[elem])[indexes.length - 1];
}

function swapHeadAndTail(arr) {
   let len = Math.floor(arr.length / 2);
   let head = arr.splice(0, len);
   let tail = arr.splice(arr.length-len, len);
   let array = [];
   array.push(...tail);
   if(arr.length % 2) {
      let middle = arr.splice(0, 1);
      array.push(...middle)
   }
   array.push(...head);
   return array;
}

module.exports = {
    findElement: findElement,
    generateOdds: generateOdds,
    doubleArray: doubleArray,
    getArrayOfPositives: getArrayOfPositives,
    getArrayOfStrings: getArrayOfStrings,
    removeFalsyValues: removeFalsyValues,
    getUpperCaseStrings: getUpperCaseStrings,
    getStringsLength: getStringsLength,
    insertItem: insertItem,
    getHead: getHead,
    getTail: getTail,
    toCsvText: toCsvText,
    toStringList: toStringList,
    toArrayOfSquares: toArrayOfSquares,
    getMovingSum: getMovingSum,
    getSecondItems: getSecondItems,
    propagateItemsByPositionIndex: propagateItemsByPositionIndex,
    get3TopItems: get3TopItems,
    getPositivesCount: getPositivesCount,
    sortDigitNamesByNumericOrder: sortDigitNamesByNumericOrder,
    getItemsSum: getItemsSum,
    getFalsyValuesCount: getFalsyValuesCount,
    findAllOccurences: findAllOccurences,
    sortCitiesArray: sortCitiesArray,
    getIdentityMatrix: getIdentityMatrix,
    getIntervalArray: getIntervalArray,
    distinct: distinct,
    group: group,
    selectMany: selectMany,
    getElementByIndexes: getElementByIndexes,
    swapHeadAndTail: swapHeadAndTail
};
