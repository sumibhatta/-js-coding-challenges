function dynamicKeys() {
    function createUser(user,id, name, age) {
        return {
            [`${user}_id`]: id,     
            [`${user}_name`]: name,
            [`${user}_age`]: age
        };
    }
    
    const user = createUser("support",1, "John", 25);
    return user;
}

function run() { return JSON.stringify(dynamicKeys())}
console.log(dynamicKeys());