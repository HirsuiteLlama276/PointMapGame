let latitude;
let longitude;
let map
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocalization);
} else {
    alert("Without access game is useless. Please consider it!");
}
function moveRandom(longitude, latitude) {
    const metersPerDegree = 111320;

    const metersPerDegreeAllDirections = metersPerDegree * Math.cos(latitude * Math.PI / 180);

    const randomDistanceEastWest = Math.random() * 30;
    const randomDistanceNorthSouth = Math.random() * 30;

    const deltaLongitude = randomDistanceEastWest / metersPerDegreeAllDirections;
    const deltaLatitude = randomDistanceNorthSouth / metersPerDegreeAllDirections;
    const directionLongitude = Math.random() < 0.5 ? 1 : -1;
    const directionLatitude = Math.random() < 0.5 ? 1 : -1;
    const newLongitude = longitude + (deltaLongitude * directionLongitude);
    const newLatitude = latitude + (deltaLatitude * directionLatitude);
    return {
        lat: parseFloat(newLatitude),
        lng: parseFloat(newLongitude)
    };
}
function updateMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocalization);
    } else {
        alert("Without access game is useless. Please consider it!");
    }
}

function getLocalization(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}
async function initMap() {
    updateMap()
    let myLocalization = { lat: latitude, lng: longitude };
     map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLocalization,
        mapId:"85bda8abe53b47bd",
        heading:0,
        tilt: 75
    });
     let markerLocalization = moveRandom(longitude,latitude);
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement({
        map,
        position: markerLocalization//{ lat: parseFloat(51.507351), lng: parseFloat(-0.127758) },
    });
     google.maps.event.trigger(map,'resize');
}