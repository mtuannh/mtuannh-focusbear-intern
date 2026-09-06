function calculateDiscount(price, userType) {
  // Students receive a 10% discount.
    if (userType === 'student') {
    return price - price * 0.1;
    }

    // Staff receive a 20% discount.
    if (userType === 'staff') {
    return price - price * 0.2;
    }

    return price;
}