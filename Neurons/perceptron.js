const MathUtils = require('../MathUtils');
const Neuron = require('./neuron');

class Perceptron extends Neuron {
    fire (inputs) {
        if (this._cardinality !== inputs.length) {
            throw new Error('Cardinality of input vector does not match that of weights vector.');
        }
        // return 0 if weights dot inputs + bias <= 0, 1 otherwise
        const dotProduct = MathUtils.dot(inputs, this._weights);
        return (dotProduct + this._bias) <= 0 ? 0 : 1;
    }
}

module.exports = Perceptron;