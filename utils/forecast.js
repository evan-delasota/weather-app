const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9748c79b8c11290034e9e4f4d55b38c3&units=f&query=' + latitude + ',' + longitude;
    
    request({ url:url, json:true}, (error, res) => {
        if (error) {
            callback("Cannot connect to weather service.", undefined);
        } else if (res.body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, res.body.location.name + "\n" 
                                + res.body.current.weather_descriptions[0] 
                                + ". It's currently " + res.body.current.temperature + " degrees out. \nThere's a " 
                                + res.body.current.precip + "% chance of rain.");
        }
    });

}



module.exports = forecast;