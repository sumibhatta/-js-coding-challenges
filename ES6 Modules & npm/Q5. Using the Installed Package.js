const _ = require('lodash');

function run() {
    const result = _.chunk([1, 2, 3, 4, 5], 2);
    console.log(result);
    return JSON.stringify(result);
}

module.exports = { run };


// node -e "console.log(require('./Q5. Using the Installed Package.js').run())"
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
// [[1,2],[3,4],[5]]