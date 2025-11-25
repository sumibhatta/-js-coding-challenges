import * as utils from './Es6SubClasses/utils.js';

export function run() {
    const result1 = utils.capitalize("hello");
    const result2 = utils.repeat("!", 3);
    const result3 = utils.print("Sumi");
    
    const output = `${result1} ${result2} , ${result3}`;
    console.log(output);
    return output;
}