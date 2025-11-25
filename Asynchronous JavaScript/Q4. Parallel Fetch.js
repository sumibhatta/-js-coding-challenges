function parallelFetch() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts'
    ];
    
    Promise.all // Makes both API calls in parallel
    (urls.map(url => //Creates an array of promises
                    fetch(url) //Makes HTTP request to each URL
                    // .then(res => res.json()) /Converts response to JSON
                )).then(data => { //When BOTH requests complete:
                        console.log(data);
                        document.getElementById("output").textContent =JSON.stringify(data, null, 2);
                    });
}

function run() { 
    parallelFetch();
    return "Fetching...";
}