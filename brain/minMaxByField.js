// const fs = require('fs');
// const path = require('path');

// const rawMinMax = fs
//   .readFileSync(path.resolve(__dirname, './data/minsAndMaxs.csv'), 'utf8')
//   .split('\n')
//   .map(row => row.replace(`\r`, ''));
// console.log('TCL: rawMinMax', rawMinMax);

// //create data structure formatted as {{field, {min, max}, {field, {min, max}}...}
// const minMaxByField = rawMinMax.slice(1).reduce((accumObj, rowStr) => {
//   let fields = rowStr.split(',');
//   accumObj[fields[0]] = { min: fields[1], max: fields[2] };
//   return accumObj;
// }, {});

// module.exports = minMaxByField;
