const { NeuralNetwork } = require('brain.js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const minMaxByField = require('./findMaxMin'); //arr of objects: {field {min, max}}

//read data file as synch function; returns raw data as array of strings
const rawTrainingData = fs
  .readFileSync(path.join(__dirname + '/train.csv'), 'utf8')
  .split('\n');

//extract headers
const headers = rawTrainingData[0]
  .split(',')
  .map(header => header.replace(/["']/g, ''));

let sampleSize = rawTrainingData.length - 1;

//Format training data ([{input: {label: value}, {output: {label: value}}] with normalized values between 0 and 1
const allTrainingData = rawTrainingData.slice(1, sampleSize).map(row => {
  return row.split(',').reduce((dataObj, dataVal, index) => {
    let header = headers[index];

    if (header === 'diagnosis') {
      //Diagnosis data normalized as 0 (benign[B]) or 1 (malignant[M])
      dataVal = dataVal === 'M' ? 1 : 0;
    } else if (header !== 'id') {
      //Other data normalized as |(value - min)| / range
      if (minMaxByField.hasOwnProperty(header)) {
        let min = minMaxByField[header].min;
        let max = minMaxByField[header].max;
        let range = max - min;
        let distanceFromMin = Math.abs(dataVal - min);
        let normalizedToDecimal = Number.parseFloat(
          distanceFromMin / range
        ).toPrecision(4);
        dataVal = normalizedToDecimal;
      }
    }
    //set label for data point
    dataObj[header] = dataVal;
    return dataObj;
  }, {});
});

//input will have all fields except id + diagnosis; only output diagnosis
//NOTE TO SELF: _.Omit slower than _.pick
const cleanTrainingData = allTrainingData.map(row => ({
  input: _.omit(row, ['id', 'diagnosis']),
  output: _.pick(row, ['diagnosis']),
}));

//NOTE TO SELF FOR LATER: Consider shuffling training data

//initialize neural network
const config = {
  activiation: 'sigmoid',
  // hiddenLayers: [4],
  // iterations: 156,
  learningRate: 0.5,
};
const net = new NeuralNetwork(config);
// net.train(cleanTrainingData);

console.log('Done training!', net.train(cleanTrainingData));
//simple feed forward neural network; can play around with options for hiddenLayers & activiation; consider accuracy function
