const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log("Please provide an address");
} else {
    geocode(address, (error, { latitude, longitude, name } = {}) => {
        if (error) {
            return console.log(error);
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log("Current weather for " + name);
            console.log(forecastData);
        })
    });
}