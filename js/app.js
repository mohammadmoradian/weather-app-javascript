const storage = new Storage(); 
const weatherLocatin = storage.getLocationData();  
const weather = new Weather(weatherLocatin);
const ui = new UI(); 

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
    ui.loading(true); 
    weather.getWeather()
    .then((result) => {
        console.log(result); 
        ui.paint(result, weather.location); 
        ui.loading(false); 
    }).catch((err) => {
        console.log(err); 
        ui.loading(false);
    })
}

document.getElementById('w-change-btn').addEventListener('click', changeLocation);

const locationModal = new bootstrap.Modal('#locationModal')

function changeLocation() {
    const city = document.getElementById('city').value;
    weather.changeLocation(city); 
    storage.setLocationData(city);
    locationModal.hide(); 

    getWeather(); 
}