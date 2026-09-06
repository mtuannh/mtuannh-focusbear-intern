const DISCOUNT_RATE = 0.1;
const MINIMUM_AGE = 18;
const MINIMUM_SCORE = 50;

function isEligibleUser(user) {
return (
    user &&
    user.active &&
    user.age >= MINIMUM_AGE &&
    user.score > MINIMUM_SCORE
);
}

function calculateTotalScore(users) {
    return users
    .filter(isEligibleUser)
    .reduce((total, user) => total + user.score, 0);
}

function countEligibleUsers(users) {
    return users.filter(isEligibleUser).length;
}

function calculateAverageScore(totalScore, userCount) {
    return userCount > 0 ? totalScore / userCount : 0;
}

function calculateDiscount(amount) {
  return amount * DISCOUNT_RATE;
}

function generateUserReport(users) {
    const totalScore = calculateTotalScore(users);
    const eligibleUserCount = countEligibleUsers(users);
    const averageScore = calculateAverageScore(
    totalScore,
    eligibleUserCount
    );
    const discount = calculateDiscount(totalScore);
    const finalAmount = totalScore - discount;

    console.log('Average:', averageScore);
    console.log('User report');
    console.log('Total:', totalScore);
    console.log('Discount:', discount);
    console.log('Final:', finalAmount);

    return totalScore;
}

const users = [
    { name: 'John', age: 25, active: true, score: 80 },
    { name: 'Sarah', age: 30, active: true, score: 60 },
    { name: 'Mike', age: 17, active: true, score: 90 },
];

generateUserReport(users);