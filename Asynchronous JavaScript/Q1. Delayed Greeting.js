function delayedHello() {
    setTimeout(() => {
        const message = "Hello";
        console.log(message);
        document.getElementById("output").textContent = message;
    }, 2000);
}

function run() { 
    delayedHello();
    return "Wait 2 seconds";
}