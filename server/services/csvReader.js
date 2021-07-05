const fs = require('fs');
const { prepareCSV } = require('../helpers/csv');

const readCsv = async () => {
  const preparedData = [];
  const csvData = await fs
    .readFileSync(`${process.cwd()}/assets/${process.env.CSV_DATA}`)
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map((e) => e.trim()) // remove white spaces for each line
    .map((e) => e.replace(/,https/, /"https/)) // replace commas before http
    .map((e) => e.replace(',', '')) // replace commas
    .map((e) => e.split('"').map((e) => e.trim())); // split to each line in array

  for (const dt of csvData) {
    preparedData.push(
      dt
        .filter((dt) => dt) // remove empty
        .filter((dt) => dt !== ',') // remove commas
        .filter((dt) => dt !== ';;;;;;;;;;;') // remove the MESS
    );
  }

  return prepareCSV(preparedData);
};

module.exports = { readCsv };
