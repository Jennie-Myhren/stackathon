const Papa = require('papaparse');

//csv string of data for parsing
const minsMaxsCsv = `field,min,max
radius_mean,6.981,28.11
texture_mean,9.71,39.28
perimeter_mean,43.79,188.5
area_mean,143.5,2501
smoothness_mean,0.05263,0.1634
compactness_mean,0.01938,0.3454
concavity_mean,0,0.4268
concave_points_mean,0,0.2012
symmetry_mean,0.106,0.304
fractal_dimension_mean,0.04996,0.09744
radius_se,0.1115,2.873
texture_se,0.3602,4.885
perimeter_se,0.757,21.98
area_se,6.802,542.2
smoothness_se,0.001713,0.03113
compactness_se,0.002252,0.1354
concavity_se,0,0.396
concave_points_se,0,0.05279
symmetry_se,0.007882,0.07895
fractal_dimension_se,0.0008948,0.02984
radius_worst,7.93,36.04
texture_worst,12.02,49.54
perimeter_worst,50.41,251.2
area_worst,185.2,4254
smoothness_worst,0.07117,0.2226
compactness_worst,0.02729,1.058
concavity_worst,0,1.252
concave_points_worst,0,0.291
symmetry_worst,0.1565,0.6638
fractal_dimension_worst,0.05504,0.2075`;

let parsed = Papa.parse(minsMaxsCsv, { delimiter: ',', header: true });

//create obj with key for each field (field: {min, max})
const minMaxByField = parsed.data.reduce((accumObj, row) => {
  accumObj[row.field] = { min: row.min, max: row.max };
  return accumObj;
}, {});

module.exports = minMaxByField;
