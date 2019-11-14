const { neuralNetwork } = require('brain.js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const minMaxByField = require('./findMaxMin'); //arr of objects: {field {min, max}}

//read data file as synch function; returns raw data as array of strings
const rawTrainingData = fs
  .readFileSync(path.join(__dirname + '/normalizeData.csv'), 'utf8')
  .split('\n');

//extract headers
const headers = rawTrainingData[0]
  .split(',')
  .map(header => header.replace(/["']/g, ''));

let sampleSize = rawTrainingData.length - 1;

//NeuralNetwork takes [{input: {label: value}, {ouput: {label: value}}}], with normalized values btwn 0 and 1; map over data, setting labels for each datapoint
const allTrainingData = rawTrainingData.slice(1, sampleSize).map(row => {
  return row.split(',').reduce((dataObj, dataVal, index) => {
    let header = headers[index];

    if (header === 'diagnosis') {
      //Diagnosis data normalized as 0 (benign[B]) or 1 (malignant[M])
      dataVal = dataVal === 'M' ? 1 : 0;
    } else if (header !== 'id') {
      //Other data normalized as | (value - min) | / range
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
    dataObj[header] = dataVal;
    return dataObj;
  }, {});
});

//input has every field except id + diagnosis; (Note: omit slower than pick)
const input = allTrainingData.map(row => _.omit(row, ['id', 'diagnosis']));

//output only has diagnosis label;
const output = allTrainingData.map(row => _.pick(row, ['diagnosis']));

//Consider shuffling data

//simple feed forward neural network; can play around with options for hiddenLayers & activiation; consider accuracy function
