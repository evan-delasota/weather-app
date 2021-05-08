const request = require('request');

const weatherStackUrl = 'http://api.weatherstack.com/current?access_key=9748c79b8c11290034e9e4f4d55b38c3&units=f&query=';
const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXRkMDkiLCJhIjoiY2tvZmI1OXJ5MDNwbjJwb3lxZGE1N3lxYSJ9.m5eprcKQVItm7PAYnJE9hQ&limit=1';

request({ url:weatherStackUrl, json:true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service.");
    } else if (response.body.error) {
        console.log("Unable to find location");
    }else {
        console.log(response.body.location.name);
        console.log(response.body.current.weather_descriptions[0] + ". It's currently " + response.body.current.temperature + " degrees out.");
        console.log("There's a " + response.body.current.precip + "% chance of rain.");

    }
});

request({url: geocodingUrl, json:true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to geolocation service.");
    } else if (response.body.features[0] === undefined) {
        console.log("Location not found.");
    } else {
        console.log("Latitude: " + response.body.features[0].center[1]);
        console.log("Longitude: " + response.body.features[0].center[0]);
    }
});