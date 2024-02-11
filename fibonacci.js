let num = 0;

let fibArr = [];


for(let i = 0; i <= 5; i++) {
    if(i < 2){
        fibArr.push(i);
    }else {
        fibArr.push(fibArr[i - 1] + fibArr[i-2]);
    }

}

console.log(fibArr);