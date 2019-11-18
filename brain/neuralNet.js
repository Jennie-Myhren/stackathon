const { NeuralNetwork } = require('brain.js');
const _ = require('lodash');
// const fs = require('fs');
// const path = require('path');
const data = require('./parseData');
const minMaxByField = require('./minsAndMaxs'); //{field: {min, max}, ...}
const tallyAccuracy = require('./tallyAccuracy');

//normalize and format dataset
const allData = data.map(row => {
  for (let field in row) {
    if (field !== 'id') {
      //normalize Dx to 1 (malignant) or 0 (benign)
      if (field === 'diagnosis') {
        row[field] = row[field] === 'M' ? 1 : 0;
      } else if (minMaxByField.hasOwnProperty(field)) {
        //for all other fields, find its overall min + max
        let min = minMaxByField[field].min;
        let max = minMaxByField[field].max;
        //calculate the range for the field across full dataset
        let range = max - min;
        //convert to # btwn 0 and 1 by dividing val's distance from min by the entire range
        let distanceFromMin = Math.abs(row[field] - min);
        let normalizedToDecimal = Number.parseFloat(
          distanceFromMin / range
        ).toPrecision(4);
        row[field] = Number(normalizedToDecimal);
      }
    }
  }
  return row;
});

//separate train and test data
let sampleSize = data.length; //(n=569)
let midPoint = Math.ceil(sampleSize / 2);
let trainData = allData.slice(0, midPoint); //matches train.csv (n=285)
let testData = allData.slice(midPoint); //matches test.csv (n=284)

//select all fields but id & Dx for input; output = Dx (NOTE: _.omit slower than _.pick)
const cleanTrainData = trainData.map(row => ({
  input: _.omit(row, ['id', 'diagnosis', 'field']),
  output: _.pick(row, ['diagnosis']),
}));

const cleanTestData = testData.map(row => ({
  input: _.omit(row, ['id', 'diagnosis', 'field']),
  output: _.pick(row, ['diagnosis']),
}));

//NEURAL NETWORK CONFIG
//set network configuration options; default hidden layer (1 proportionate to input layer] yielded 96.83% accuracy
const config = {
  activiation: 'sigmoid',
  // hiddenLayers: [4],
  // iterations: 20000,
  learningRate: 0.3,
};

//initialize simple feed-forward neural network
const net = new NeuralNetwork(config);

//log error + iterations post-training
// console.log('Artificial brain done training!', net.train(cleanTrainData));
net.train(cleanTrainData);

const trainedBrain = net;

//calculate and log accuracy after running net.run on test data
const accuracy = tallyAccuracy(net, cleanTestData);
// console.log('TCL: accuracy', accuracy);

module.exports = { cleanTestData, trainedBrain, accuracy };
