function reverseArrayUsingForOf() {
    function reverseArray(arr) {
        let res=[];
        for(let x of arr) res.unshift(x);
        return res;
    }
    return reverseArray([1,2,3,4,5]);
}

function run() { return reverseArrayUsingForOf(); }
console.log(reverseArrayUsingForOf());