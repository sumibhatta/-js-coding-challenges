function sumEvenSquares(arr) {
    reduced = arr.map(x => x * x)
                .filter(x => x % 2 === 0)
                .reduce((sum, x) => sum + x, 0);
    
    const result = arr.filter(x => (x * x) % 2 === 0).map(x => `${x}²`).join(" + ");
    return `(${result}) = ${reduced}`
}

function run() { 
    const result = sumEvenSquares([1, 2, 3, 4]);
    console.log(result);
    return result;
}