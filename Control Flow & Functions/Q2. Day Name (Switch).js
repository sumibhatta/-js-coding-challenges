function dayName() {
    function getDayName(num) {
        switch(num) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3:
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
            default: return "Enter valid number";
        }
    }
    return getDayName(3);
}

function run() { return dayName(); }
console.log( dayName());