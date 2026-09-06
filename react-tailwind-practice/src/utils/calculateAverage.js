export function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
    }

    if (!numbers.every((number) => typeof number === 'number')) {
    return 0;
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);

    return total / numbers.length;
}