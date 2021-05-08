const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode("New York", (error, res) => {
    console.log('Data', res);

});

forecast(44.1545, -75.7088, (error, res) => {
    console.log('Data', res);
});