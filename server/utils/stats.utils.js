const ratio = (a, b) => {
    let ratio = 0;
    if (b === 0 && a > 0) {
        ratio = 1;
    }
    else if (b > 0) {
        ratio = a / b;
    }

    return ratio;
}

module.exports = {
    ratio
}