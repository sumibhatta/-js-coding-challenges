import { add, sub } from './math.js';
import g from './greet.js';

export function mathFuns() {
    return `Add: ${add(5, 3)}, Sub: ${sub(5, 3)}`;
}

export function greetFuns() {
    return g("Sumi");
}