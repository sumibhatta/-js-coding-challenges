function addAsync(a, b) {
    setTimeout(() => {
        const result = a + b;
        console.log("5+3 = " + result);
        document.getElementById("output").textContent = "5+3 = " + result;
    }, 1000);
}

function run() { 
    addAsync(5, 3);
    console.log("2+3 = "+(2+3))
    return "2+3 = "+(2+3);
}