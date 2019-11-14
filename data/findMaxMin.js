const fs = require('fs');
const path = require('path');

//read data file as synch function; returns raw data as array of strings
const rawMinMax = fs
  .readFileSync(path.join(__dirname + '/minsAndMaxs.csv'), 'utf8')
  .split('\n')
  .map(row => row.replace(`\r`, ''));

//create a data structure containing an obj for each field (field.min, field.max)
const minMaxByField = rawMinMax.slice(1).map(rowStr => {
  let fields = rowStr.split(',');
  if (fields[1] !== undefined && fields[2] !== undefined) {
    return { field: fields[0], min: fields[1], max: fields[2] };
  }
});

//export the mins and maxes, minus the last row (return in csv file)
module.exports = minMaxByField;
