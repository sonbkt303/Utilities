function uniqueArray(array) {
  _.uniqBy(array, function(e) {
    return e.id;
  });
}


function unique(arr, prop) {
  return array.reduce((accumulator, element) => {
    if (!accumulator.find(el => el[key] === element[key])) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
}

const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

this.questions = this.questions.sort((a, b) => (a.questionOrder > b.questionOrder) ? 1 : ((b.questionOrder > a.questionOrder) ? -1 : 0));
