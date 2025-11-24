function templateLiteralFormatter() {

    function formatUser(name,age) {
        return `User ${name} is ${age} years old`;
    }

    const name = "Sumi";
    const age = 23;
    return formatUser(name, age);
    
}

function run() {
    return templateLiteralFormatter();
}

console.log(templateLiteralFormatter());
