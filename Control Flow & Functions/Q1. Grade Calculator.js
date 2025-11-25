function gradeCalculator() {
    function getGrade(score) {
        if(score>=90 && score<=100) return "A";
        else if(score>=80) return "B";
        else if(score>=70) return "C";
        else if(score>=60) return "D";
        else if(score>=0) return "F";
        else return "Try again with vaild details";
    }
    return getGrade(22);
}

function run() { return gradeCalculator(); }
console.log(run());
