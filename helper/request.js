

axios
.get('https://www.google.com/')
.then(function(response) {
  // handle success
  console.log(response);
})
.catch(function(error) {
  // handle error
})
