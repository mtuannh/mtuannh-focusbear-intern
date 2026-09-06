function isEligibleUser(user, includeInactive) {
    const isAdult = user.age >= 18;
    const isVerified = user.verified;
    const isAllowed = includeInactive || user.active;

return isAdult && isVerified && isAllowed;
}

function getEligibleUsers(users, includeInactive) {
return users.filter((user) => isEligibleUser(user, includeInactive));
}

const users = [
    { name: 'John', age: 25, verified: true, active: true },
    { name: 'Sarah', age: 30, verified: true, active: false },
    { name: 'Mike', age: 17, verified: true, active: true },
];

console.log(getEligibleUsers(users, false));