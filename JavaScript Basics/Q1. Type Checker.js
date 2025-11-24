function typeChecker() {

    function checkTypes(values) {
        return values.map(v => typeof v);
    }

    const input = [1, "a", true, null, undefined];
    
    return checkTypes(input);
}

function run() {
    return typeChecker();
}

console.log(typeChecker());
