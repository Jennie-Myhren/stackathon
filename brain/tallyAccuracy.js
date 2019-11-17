//measure accuracy using a hits counter
function tallyAccuracy(net, testData) {
  //initialize counter for correct guesses
  let hits = 0;
  testData.forEach(datapoint => {
    //get prediction for each test run (NOTE: net.run gives prediction even if input missing fields)
    let output = net.run(datapoint.input);
    let computerGuess = Math.round(output.diagnosis);
    //compare prediction w/ expectation
    let providedDx = Math.round(datapoint.output.diagnosis);
    if (computerGuess === providedDx) {
      hits += 1;
    }
  });
  //make sure all the samples ran
  console.log(`Articial Brain ran ${testData.length} tests.`);
  let accuracy = Number.parseFloat(hits / testData.length).toPrecision(4);
  return `${accuracy * 100} %`;
}

module.exports = tallyAccuracy;
