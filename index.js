const { Perceptron, Sigmoid } = require('./Neurons');

const perceptron = new Perceptron(3, [-2, -2]);
console.log('perceptron.fire -> ', perceptron.fire([0, 0]));

const sigmoid = new Sigmoid(3, [-2, -2]);
console.log('sigmoid.fire -> ', sigmoid.fire([0, 0]));