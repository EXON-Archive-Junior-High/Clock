const weather = document.querySelector(".js-weather");

const API_KEY = "57e550135b53a5d3d89c06ec508da1fc";
const COORDS = "coords";


function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @ ${place}`
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function hadleGeoSucces(position) {
    console.log("loaded");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitudem, longitude);
}

function handleGeoError() {
    console.log("GeoError");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(hadleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();