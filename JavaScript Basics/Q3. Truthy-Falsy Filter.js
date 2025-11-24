function truthyFalsyFilter() {

    function filterTruthy(arr) {
        return arr.filter(x => {
            if(x) return true
            else return false
        })
    }

    const input = [false, 0, -0, "",0, 1,100, "sumi", null, undefined, true, NaN]

    
    return filterTruthy(input);
}

function run() {
    return truthyFalsyFilter();
}

console.log(truthyFalsyFilter());
