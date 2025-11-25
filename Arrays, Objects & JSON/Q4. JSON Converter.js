function jsonConverter() {
    function safeParse(jsonStr) {
        try {
            return JSON.parse(jsonStr);
        } catch (error) {
            return "Invalid JSON";
        }
    }
    
    const validJson = '{"testOne": "one", "testTwo": 2}';
    const invalidJson = '{testThree: three}';
    
    return {
        valid: safeParse(validJson),
        invalid: safeParse(invalidJson)
    };
}

function run() { return JSON.stringify(jsonConverter()) }
console.log(jsonConverter());