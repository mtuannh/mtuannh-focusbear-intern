function getEligibleUsers(users, includeInactive) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (includeInactive === true) {
      if (users[i].age >= 18) {
        if (users[i].verified === true) {
          result.push(users[i]);
        }
    }
    } else {
    if (users[i].age >= 18) {
        if (users[i].verified === true) {
        if (users[i].active === true) {
            result.push(users[i]);
        }
        }
    }
    }
}

return result;
}

const users = [
{ name: 'John', age: 25, verified: true, active: true },
{ name: 'Sarah', age: 30, verified: true, active: false },
{ name: 'Mike', age: 17, verified: true, active: true },
];

console.log(getEligibleUsers(users, false));