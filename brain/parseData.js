const Papa = require('papaparse');
const dataSetCsvStr = require('./data/dataset');

let { data } = Papa.parse(dataSetCsvStr, {
  delimiter: ',',
  header: true,
  skipEmptyLines: true,
});

//export array of individual objects with patient data
module.exports = data;
