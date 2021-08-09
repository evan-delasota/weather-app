const weatherForm = document.querySelector('form');
const search = document.querySelector('input')

const locationMessage = document.querySelector('#location');
const forecastMessage = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = search.value;
    
    locationMessage.textContent = 'Loading...';
    forecastMessage.textContent = '';

    fetch('/weather?address=' + name).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationMessage.textContent = data.error;
            } else {
                locationMessage.textContent = data.name;
                forecastMessage.textContent = data.forecast;
            }
        })
    })
})