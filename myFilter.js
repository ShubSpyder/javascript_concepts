Array.prototype.myFilter = function (callback) {
    const filteredArray = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }

    }

    return filteredArray;
}

const arr = [3, 8, 29, 14, 19, 22, 7];

const newArr = arr.myFilter((ele) => {
    return ele >= 18;
})

console.log(newArr);