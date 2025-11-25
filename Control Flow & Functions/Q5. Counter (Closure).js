function counterDemo() {
    function createCounter() {
        let count=0;
        return {
            increment: ()=>count++,
            get: ()=>count
        };
    }
    const c = createCounter();
    c.increment();
    c.increment();
    c.increment();
    c.increment();
    return c.get();
}

function run() { return counterDemo() }
console.log(counterDemo());