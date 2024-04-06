let latitude;
let longitude;
let map
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocalization);
} else {
    alert("Without access game is useless. Please consider it!");
}
function getLocalization(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}
async function initMap() {
    let myLocalization = { lat: latitude, lng: longitude };
     map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLocalization,
        mapId:"85bda8abe53b47bd",
        heading:0,
        tilt: 75
    });
}