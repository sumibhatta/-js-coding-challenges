function intervalCounter() {
    let count = 1;
    const interval = setInterval(() => {
        console.log(count);
        document.getElementById("output").textContent = count;
        ++count
        if (count > 5) clearInterval(interval);
    }, 1000);
}

function run() { 
    intervalCounter();
    return "Start...";
}