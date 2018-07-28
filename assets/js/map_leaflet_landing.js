var mymap = L.map('mapid_landing',{zoomControl: false}).setView([15, -30], 2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: '/assets/flags/canada.svg',
    iconSize:     [40, 40],
    iconAnchor:   [40, 40],
    popupAnchor:  [-20, -40]
  }
});

var gswaiIcon = new LeafIcon({iconUrl: '/assets/flags/gswai.svg'})

L.marker([43.6108, 3.8767], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br /> Paris, France');
L.marker([7.369721999999999, 12.354722000000038], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Douala, Cameroon').openPopup();
L.marker([-9.189967, -75.015152], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Lima, Peru');
L.marker([22.28552, 114.15769], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Hong Kong, China');
L.marker([19.4326077, -99.13320799999997], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Mexico city, Mexico');
L.marker([33.886917, 9.537499000000025], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Carthage, Tunisia');
L.marker([41.0082376, 28.9783589], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Istanbul, Turkey');
L.marker([-16.290154, -63.58865300000002], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />La Paz, Bolivia');
L.marker([50.85045, 4.34878], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Bruxelles, Belgium');
L.marker([25.105497, 121.597366], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Taipei, Taiwan');
L.marker([-33.8830555556, 151.21666666725], {icon: gswaiIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Sydney, Australia');
