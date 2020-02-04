const _ = require('lodash');



function groupBykey(data, key) {
  let cars = [
    {
      make: 'audi',
      model: 'r8',
      year: '2012'
    },
    {
      make: 'audi',
      model: 'rs5',
      year: '2013'
    },
    {
      make: 'ford',
      model: 'mustang',
      year: '2012'
    },
    {
      make: 'ford',
      model: 'fusion',
      year: '2015'
    },
    {
      make: 'kia',
      model: 'optima',
      year: '2012'
    }
  ];
  // return _.mapValues(_.groupBy(data, key), o =>
  //   o.map(e => _.omit(e, key))
  // );
  return _.groupBy(data, o => o[key]);
}
// let a = groupBykey(cars, 'make');

function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}
