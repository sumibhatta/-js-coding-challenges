function squareAll(arr) {
    return arr.map(x => x * x);
}

function run() { 
    const result = squareAll([1,2,3,4,5]);
    console.log(result);
    return JSON.stringify(result);
}