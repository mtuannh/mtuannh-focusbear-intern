function calculateDiscount(price, userType) {
  // if user type is student then discount
    if (userType === 'student') {
    // calculate discount
    return price - price * 0.1;
    }

    // if user type is staff then discount
    if (userType === 'staff') {
    // calculate discount
    return price - price * 0.2;
    }

    // return price
    return price;
}