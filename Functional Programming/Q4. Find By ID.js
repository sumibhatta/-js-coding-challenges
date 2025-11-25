function findById(arr, id) {
    return arr.find(x => x.id === id);
}

function run() { 
    const items = [{id: 1, name: "Sumi"}, {id: 2, name: "Bhatta"}];
    const result = findById(items, 2);
    console.log(result);
    return JSON.stringify(result);
}