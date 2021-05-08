const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=9748c79b8c11290034e9e4f4d55b38c3&query=37.8267,-122.4233';

request({ url:url, json:true }, (error, response) => {
    console.log("It's currently " + response.body.current.temperature + " degrees out.");
    console.log("There's a " + response.body.current.precip + "% chance of rain.");
})