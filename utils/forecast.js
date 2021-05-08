const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9748c79b8c11290034e9e4f4d55b38c3&units=f&query=' + latitude + ',' + longitude;
    
    request({ url:url, json:true}, (error, { body }) => {
        if (error) {
            callback("Cannot connect to weather service.", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] 
                                + ", it's currently " + body.current.temperature + " degrees out.\n" 
                                + "There's a "  + body.current.precip + "% chance of rain.");
        }
    });

}



module.exports = forecast;