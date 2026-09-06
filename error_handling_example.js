function calculateAverage(numbers) {
    if (numbers.length > 0) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total / numbers.length;
    }

    return 0;
}

console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([]));