const MathUtils = {
    dot: (v1, v2) => v1.reduce(
        (previous, current, i) => previous + (current * v2[i]), 0),
    sigma: z => 1 / (1 + Math.exp(-z))
};

module.exports = MathUtils;