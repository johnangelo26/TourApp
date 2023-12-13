const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9obmFuZ2VsbyIsImEiOiJjbHEzaHIwOXQwY3M0MmludG56MWZwN3R2In0.FxiFcjPTCv8eUy5PlztwJA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
