const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXRkMDkiLCJhIjoiY2tvZmI1OXJ5MDNwbjJwb3lxZGE1N3lxYSJ9.m5eprcKQVItm7PAYnJE9hQ&limit=1';

    request({ url:url, json:true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to geolocation services", undefined);
        } else if (body.features[0] === undefined) {
            callback("Location not found.", undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                name: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;