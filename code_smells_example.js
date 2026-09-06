const DISCOUNT = 0.1;

class UserManager {
constructor(users) {
    this.users = users;
}

processUsers() {
    let x = 0;
    let y = 0;

    for (let i = 0; i < this.users.length; i++) {
    if (this.users[i]) {
        if (this.users[i].active === true) {
        if (this.users[i].age >= 18) {
            if (this.users[i].score > 50) {
            x += this.users[i].score;
            y++;
            }
        }
        }
    }
    }

    if (y > 0) {
    console.log('Average:', x / y);
    } else {
    console.log('Average:', 0);
    }

    console.log('User report');
    console.log('Total:', x);

    const discount1 = x * 0.1;
    console.log('Discount:', discount1);

    const discount2 = x * 0.1;
    console.log('Final:', x - discount2);

    // Old calculation
    // const oldTotal = x * 0.2;
    // console.log(oldTotal);

    return x;
}

sendEmail(user) {
    console.log('Sending email to ' + user.email);
}

saveUser(user) {
    console.log('Saving user ' + user.name);
}

deleteUser(user) {
    console.log('Deleting user ' + user.name);
}
}

const users = [
{ name: 'John', age: 25, active: true, score: 80 },
{ name: 'Sarah', age: 30, active: true, score: 60 },
{ name: 'Mike', age: 17, active: true, score: 90 },
];

const manager = new UserManager(users);
manager.processUsers();