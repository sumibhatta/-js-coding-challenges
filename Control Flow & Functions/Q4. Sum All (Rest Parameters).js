function sumAllRestParameters() {
    function sumAll(...nums) {
        return nums.reduce((a,b)=>a+b,0);
    }
    return sumAll(1,2,3,4,5);
}

function run() { return sumAllRestParameters() }
console.log(sumAllRestParameters());