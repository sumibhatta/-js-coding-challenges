function arrayEditor() {
    function operations() {
        const a = [];
        a.push(10);
        a.unshift(5);
        a.pop();
        a.splice(1, 1);
        return a;
    }
    const result = operations();
    return result;
}

function run() { return arrayEditor() }
console.log(arrayEditor());