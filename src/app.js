const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDir = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../views/partials');
const viewsPath = path.join(__dirname, '../views');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsDir);

// Setup static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Evan Delasota'
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'Please provide a search term.'
        })
    } else {
        res.send({
            products: []
        });
    }
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide a valid address.'
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, name } = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                name,
                address: req.query.address
            });
        });
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Evan Delasota' 
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Evan Delasota'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Not Found',
        name: 'Evan Delasota'
    });
});

app.listen(port, () => {
    console.log("Server successfully started on port 3000");
});