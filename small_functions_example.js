function countActiveUsers(users) {
    return users.filter((user) => user.isActive).length;
}

function calculateTotalScore(users) {
    return users
    .filter((user) => user.isActive && user.score >= 50)
    .reduce((total, user) => total + user.score, 0);
}

function calculateAverageScore(totalScore, activeUsers) {
    return activeUsers > 0 ? totalScore / activeUsers : 0;
}

function displayResults(activeUsers, totalScore, averageScore) {
    console.log(`Active users: ${activeUsers}`);
    console.log(`Total score: ${totalScore}`);
    console.log(`Average score: ${averageScore}`);
}

function processUsers(users) {
    const activeUsers = countActiveUsers(users);
    const totalScore = calculateTotalScore(users);
    const averageScore = calculateAverageScore(totalScore, activeUsers);

    displayResults(activeUsers, totalScore, averageScore);

    return averageScore;
}

const users = [
    { name: 'John', isActive: true, score: 80 },
    { name: 'Sarah', isActive: true, score: 60 },
    { name: 'Mike', isActive: false, score: 90 },
];

processUsers(users);