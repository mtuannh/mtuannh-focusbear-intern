function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }

    if (!numbers.every((number) => typeof number === 'number')) {
        return 0;
    }

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total / numbers.length;
}

console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([]));
console.log(calculateAverage(null));
console.log(calculateAverage(['hello', 'world']));