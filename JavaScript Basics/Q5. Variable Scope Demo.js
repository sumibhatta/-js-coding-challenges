function variableScopeDemo() {

    var iAmVarOutsideScope = "Var Outside";
    let iAmLetOutsideScope = "Let Outside";
    const iAmConstOutsideScope = "Const Outside";

    let result = "";

    if (true) {
        var iAmVarInsideScope = "Var Inside";
        let iAmLetInsideScope = "Let Inside";
        const iAmConstInsideScope = "Const Inside";
        
        result += `From Inside Block: ${iAmVarInsideScope}, ${iAmLetInsideScope}, ${iAmConstInsideScope} \n\t\t ${iAmVarOutsideScope}, ${iAmLetOutsideScope}, ${iAmConstOutsideScope},\n`;
    }

    result += `From Outside Block: ${iAmVarOutsideScope}, ${iAmLetOutsideScope}, ${iAmConstOutsideScope},\n\t\t ${iAmVarInsideScope}, `;
    result += `iAmLetInsideScope: ${typeof iAmLetInsideScope !== "undefined" ? iAmLetInsideScope : "Not in scope"}, `;
    result += `iAmConstInsideScope: ${typeof iAmConstInsideScope !== "undefined" ? iAmConstInsideScope : "Not in scope"}`;

    return result;
}

function run() {
    return variableScopeDemo();
}

console.log(run());
