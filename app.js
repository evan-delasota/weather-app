const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode("Los Angeles", (error, res) => {
    forecast(res.latitude, res.longitude, (error, res) => {
        console.log(res);
    })
});