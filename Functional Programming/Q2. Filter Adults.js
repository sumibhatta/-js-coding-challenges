function filterAdults(users) {
    return users.filter(x => x.age >= 18);
}

function run() { 
    const users = [{name:"A", age:17}, {name:"B", age:20}];
    const result = filterAdults(users);
    console.log(result);
    return JSON.stringify(result);
}