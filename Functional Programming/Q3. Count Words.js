function countWords(arr) {
    return arr.reduce((count, word) => {
        count[word] = count[word] ? count[word] + 1 : 1;        
        return count;
    }, {});
}

function run() { 
    const fruits = ["apple", "banana", "apple"];
    const result = countWords(fruits);
    console.log(result);
    return JSON.stringify(result);
}