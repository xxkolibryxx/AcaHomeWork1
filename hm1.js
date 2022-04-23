// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

// Implement these methods

Array.prototype.find = function (callback) {
    const { length } = this;
    for (let i = 0; i < length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return -1;

};
// let arr = [1,'avokado',3,4,5];
// let element = arr.find(function(item,index) {
//     return index === 1;
// });
// console.log(element); // avokado

// ==============================

Array.prototype.findIndex = function (callback) {
    const { length } = this;

    for (let i = 0; i < length; i += 1) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }

    return -1;
};
// let arr = [1,'avokado',3,4,5];
// let index = arr.findIndex(function(item) {
//     return item === 'avokado';
// });
// console.log(index); // 1

// ==============================

Array.prototype.lastIndexOf = function (searchedValue, startPoint = 0) {
    const { length } = this;
    for (let i = length - startPoint; i >= 0; i--) {
        if (searchedValue === this[i]) {
            return i;
        }
    }
    return -1
};

// let index = [1, 2, 3, 2].lastIndexOf(2);
// console.log(index); // 3

// let index = [1, 2, 3, 2].lastIndexOf(2,2);
// console.log(index); // 1

// ==============================

Array.prototype.some = function (callback) {
    const { length } = this;
    for (let i = 0; i < length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false
};

// console.log([1, 2, 3, 4, 5].some((element) => element % 2 === 0)); // true

// ==============================

Array.prototype.every = function (callback) {
    const { length } = this;
    for (let i = 0; i < length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true
};

// ==============================

// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true


Array.prototype.reduce = function (callback, initialValue = 0) {
    const { length } = this
    for (let i = 0; i < length; i++) {
        initialValue = callback(initialValue, this[i])
    }

    return initialValue
};

// console.log([{x: 1}, {x:2}, {x:3}].reduce((a, b) => {
//     return a + b.x;
// }, 0)); // 6

Array.prototype.reduceRight = function (callback, initialValue = 0) {
    
    const { length } = this
    for (let i = length-1; i >= 0; i--) {
        initialValue = callback(initialValue, this[i])
    }

    return initialValue

};

// console.log([[0, 1], [2, 3], [4, 5]].reduceRight((a, b) => {
//     return a.concat(b);
// }, [])); // [4, 5, 2, 3, 0, 1]

Array.prototype.join = function (textConcat = ',') {
    const { length } = this;
    let str = '';
    for (let i = 0; i < length; i++) {
        if (this[i] !== this[length - 1]) {
            str += this[i] + textConcat;
        } else {
            str += this[i]
        }
    }
    str
    return str;
};
// const strArr = ['My','Name','is','Jhone','Smith'];
// let strFromArr = strArr.join(' - ');
// console.log(strFromArr); // My - Name - is - Jhone - Smith

Array.prototype.pop = function () {
    const popItem = this[this.length - 1];
    this.length = this.length - 1;
    return popItem;
};
// const arrToPop = [1, 2, 3, 2, 5];
// const popedItem = arrToPop.pop();
// console.log(arrToPop); // [1,2,3,2]
// console.log(popedItem); // 5

Array.prototype.unshift = function (...unshiftItem) {
    const newArr = [
        ...unshiftItem,
        ...this
    ];
    const { length } = newArr;
    for (let i = 0; i < length; i++) {
        this[i] = newArr[i]
    }
};

// let unshiftedArr = [1,2,3,4,5];
// unshiftedArr.unshift(10,11,12)
// console.log(unshiftedArr); // [10,11,12,1,2,3,4,5]
