Array.prototype.myMap = function (callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }

    return newArr;
}

const arr = [1, 2, 3, 4, 5];

const newArr = arr.myMap((ele) => ele * 2);

console.log(newArr);