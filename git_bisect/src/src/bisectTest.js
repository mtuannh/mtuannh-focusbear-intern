export function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total + 10;
}

export function calculateLabel(price, quantity) {
    return `Total: ${calculateTotal(price, quantity)}`;
}

export function isValidQuantity(quantity) {
    return quantity > 0;
}