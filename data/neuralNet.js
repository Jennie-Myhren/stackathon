const { neuralNetwork } = require('brain.js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

//read data file as synch function; returns raw data as array of strings
const rawTrainingData = fs
  .readFileSync(path.join(__dirname + '/train.csv'), 'utf8')
  .split('\n');

//extract headers
const headers = raw[0].split(',').map(header => header.replace(/"/g, ''));

//HAVE TO GET EACH NUMBER INTO ZERO OR 1
//CAN USE Neural Network; data = {header: 0-1}; requires normalizing data to 0 or 1
//Alternatively, brain.recurrent.RNN(config) allows you to input a string (could do 'header, number')..; lose CrossValidation, however
//Would expect #s to be input and M or D to be output
const data = raw.slice(1).map(row => row.split(',').)

