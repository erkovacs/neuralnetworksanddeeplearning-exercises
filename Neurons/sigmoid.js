const MathUtils = require('../MathUtils');
const Neuron = require('./neuron');

class Sigmoid extends Neuron {
    fire (inputs) {
        if (this._cardinality !== inputs.length) {
            throw new Error('Cardinality of input vector does not match that of weights vector.');
        }
        // return sigma (- (weights dot inputs) - bias)
        const dotProduct = MathUtils.dot(inputs, this._weights);
        return MathUtils.sigma(-dotProduct - this._bias);
    }
};

module.exports = Sigmoid;