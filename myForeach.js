Array.prototype.myForeach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }

}

const arr = [1, 2, 3, 4, 5];

arr.myForeach((ele, i) => {
    console.log(ele, ' ' , i);
})