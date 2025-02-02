let studentScores = [35, 45, 72, 88, 90, 92, 40, 67, 55, 38];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] < 40) {
        studentScores[i] += 20;
    }
    if (studentScores[i] > 90) {
        studentScores[i] = 90;
}

let passedCount = studentScores.filter(score => score >= 50).length;

console.log("Number of students who passed:", passedCount);
console.log("Final adjusted scores:", studentScores);
