var mymap = L.map('mapid').setView([25, -30], 2);

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

var canadaIcon = new LeafIcon({iconUrl: '/assets/flags/canada.svg'}),
  franceIcon = new LeafIcon({iconUrl: '/assets/flags/france.svg'}),
  cameroonIcon = new LeafIcon({iconUrl: '/assets/flags/cameroon.svg'}),
  peruIcon = new LeafIcon({iconUrl: '/assets/flags/peru.svg'}),
  chinaIcon = new LeafIcon({iconUrl: '/assets/flags/china.svg'}),
  mexicoIcon = new LeafIcon({iconUrl: '/assets/flags/mexico.svg'}),
  lebanonIcon = new LeafIcon({iconUrl: '/assets/flags/lebanon.svg'}),
  tunisiaIcon = new LeafIcon({iconUrl: '/assets/flags/tunisia.svg'}),
  turkeyIcon = new LeafIcon({iconUrl: '/assets/flags/turkey.svg'}),
  boliviaIcon = new LeafIcon({iconUrl: '/assets/flags/bolivia.svg'});

L.marker([45.5016889, -73.56725599999999], {icon: canadaIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br /> Montreal, Canada').openPopup();
L.marker([43.6108, 3.8767], {icon: franceIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br /> Paris, France');
L.marker([7.369721999999999, 12.354722000000038], {icon: cameroonIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Douala, Cameroon');
L.marker([-9.189967, -75.015152], {icon: peruIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Lima, Peru');
L.marker([22.28552, 114.15769], {icon: chinaIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Hong Kong, China');
L.marker([19.4326077, -99.13320799999997], {icon: mexicoIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Mexico city, Mexico');
L.marker([20.6596988, -103.34960920000003], {icon: mexicoIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Guadalajara, Mexico');
L.marker([33.854721, 35.86228499999993], {icon: lebanonIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Beirut, Lebanon');
L.marker([33.886917, 9.537499000000025], {icon: tunisiaIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Carthage, Tunisia');
L.marker([41.0082376, 28.9783589], {icon: turkeyIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />Istanbul, Turkey');
L.marker([-16.290154, -63.58865300000002], {icon: boliviaIcon}).addTo(mymap).bindPopup('<b>Startup Weekend AI</b><br />La Paz, Bolivia');
