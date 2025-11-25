function copyDemo() {
    function demonstrateCopies() {
        const original = {
            plant: "Snake",
            details: { 
                type: "indoor"
            }
        };
        
        const shallowCopy = { ...original };
        
        const deepCopy = JSON.parse(JSON.stringify(original));
        

        shallowCopy.details.type = "outdoor";
        shallowCopy.plant = "Bougenvilla";
        
        deepCopy.details.type = "both";
        deepCopy.plant = "Strings";
        
        return {
            original: original,
            shallowCopy: shallowCopy,
            deepCopy: deepCopy,
            shallowAffectsOriginal: original.details.type,
            deepDoesNotAffectsOriginal: original.details.type
        };
    }
    
    const result = demonstrateCopies();
    return result;


}

function run() { return JSON.stringify(copyDemo(), null, 2)}
console.log(copyDemo());