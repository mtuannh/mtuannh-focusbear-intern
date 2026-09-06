function calculateAverageScore(users, numberOfUsers, calculateAverage) {
    const totalScore = users
    .filter((user) => user.active && user.age >= 18)
    .reduce((total, user) => total + user.score, 0);

    if (calculateAverage) {
    return totalScore / numberOfUsers;
    }

    return totalScore;
}