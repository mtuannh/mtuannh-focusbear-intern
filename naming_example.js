function f(u) {
    let x = 0;

    for (let i = 0; i < u.length; i++) {
    if (u[i].a && u[i].s > 50) {
        x += u[i].s;
    }
    }

    return x;
}

const u = [
    { a: true, s: 80 },
    { a: false, s: 90 },
    { a: true, s: 70 },
];

console.log(f(u));