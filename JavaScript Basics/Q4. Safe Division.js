function safeDivision() {

    function divide(a,b) {

            result = Number(a)/Number(b)

            if(!isFinite(result)) return "Invalid"
            else return result

    }

    
    return divide(1,NaN);
}

function run() {
    return safeDivision();
}

console.log(safeDivision());