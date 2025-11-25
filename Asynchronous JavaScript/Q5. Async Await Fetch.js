async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();
        console.log(user);
        document.getElementById("output").textContent = user.name;
    } catch {
        console.log("error");
        document.getElementById("output").textContent = "Error";
    }
}

function run() { 
    getUser(5);
    return "Fetching user...";
}