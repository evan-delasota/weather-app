const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode("Los Angeles", (error, geoData) => {
    if (error) {
        return console.log(error);
    }
    
    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(geoData.name);
        console.log(forecastData);
    })
});