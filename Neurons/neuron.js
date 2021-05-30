class Neuron {
    constructor (bias, weights) {
        this._bias = bias;
        this._weights = weights;
        this._cardinality = weights.length;
    }
    
    setBias (bias) { 
        this._bias = bias; 
    }

    setWeights (weights) {
        this._weights = weights;
        this._cardinality = weights.length;
    }

    fire (inputs) {
        throw new Error('Method not implemented!');
    }
}

module.exports = Neuron;