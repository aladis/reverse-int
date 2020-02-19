module.exports = function reverse(n) {
    m = Math.abs(n) + "";
    return +m
        .split("")
        .reverse()
        .join("");
};
