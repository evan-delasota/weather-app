const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geocode(address, (error, geoData) => {
    if (error) {
        return console.log(error);
    }
    
    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log("Current weather for " + geoData.name);
        console.log(forecastData);
    })
});