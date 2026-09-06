function calculateTotalScore(users) {
    let totalScore = 0;

    for (let index = 0; index < users.length; index++) {
        if (users[index].isActive && users[index].score > 50) {
        totalScore += users[index].score;
        }
    }

    return totalScore;
    }

    const users = [
    { isActive: true, score: 80 },
    { isActive: false, score: 90 },
    { isActive: true, score: 70 },
];

console.log(calculateTotalScore(users));