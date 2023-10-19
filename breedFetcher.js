const request = require('request');
const argument = process.argv;


const breedFetcher = function(breed) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + `${breed}`, function(error, response, body) {
    if (error) {
      console.log(`There was an Error! Error code:`, error.errno);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Error! We don't have the ${breed} breed information in our database.`);
      return;
    }
    console.log(data[0].description);
  });
  
};

breedFetcher(argument[2]);