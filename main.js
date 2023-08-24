// html to js selector 
let btn = document.querySelector('button')
let con = document.querySelector('.form-container')
let form = document.querySelector('form')
let name  = document.getElementById('name')
let search = document.getElementById('search')
let send = document.getElementById('send')
const add = document.getElementById('address'),
country = document.getElementById('country');
city = document.getElementById('city'),
c_code = document.getElementById('c_code'),
isp = document.getElementById('isp'),
lati = document.getElementById('lat'),
long = document.getElementById('lon'),
region = document.getElementById('region'),
r_code = document.getElementById('r_code'),
tzone = document.getElementById('tzone'),
zipcode = document.getElementById('zipcode')
ip_show = document.getElementById('ip_show')

send.addEventListener('click', () => {
  alert('form submitted!, you can now trace an ip address')
  form.style.display = 'none'
  con.style.display = 'none'
})
function show() {
 const successCallback = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log("Your latitude and longitude is :" + lat + "," + lon)
  name = (document.getElementById('name')).value = lat +","+lon; 
  console.log(position);
  let empty = "";
  let string = /[a-zA-Z]/;
  if (search.value == empty || search.value.match(string)) {
    alert("Invalid ip address")
   
  } else {
  let input = (document.getElementById('search').value)
  let url = "https://api.api-ninjas.com/v1/iplookup?address=" + input;
//fetch ip lookup api
async function getMethod() {
  const request = new Request(url, {
   headers: { 'X-Api-Key': '6q11rALx5CjhemYPfRQXug==3mzPOfYF1Wbooy1w'}
  })
  const response = await fetch(request)
  const data = await response.json()
  console.log(data)
  con.style.display = 'block'
//popup info to view latitude and longitude when clicked 
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);
//transform latitude and longitude into readable data from api
  let lat = data.lat
  let lon = data.lon
  a.href = "https://maps.google.com/?q=" + lat +","+ lon;
  document.body.appendChild(a)
  var marker = L.marker([lat, lon]).addTo(map);
  var circle = L.circle([lat, lon], {
    color: '#FF0000',
    fillColor: '#FF0000',
    fillOpacity: 0.6,
    radius: 100
  }).addTo(map);
  map.setView([lat, lon],9);
  //display data into html body
  ip_show.style.display = 'block'
  add.innerHTML = 'IP address: ' + data.address
  country.innerHTML = 'Country: ' + data.country
  city.innerHTML = 'City: ' + data.city
  c_code.innerHTML = 'Country code: ' + data.country_code
  isp.innerHTML = 'Internet Service Provider: ' + data.isp
  lati.innerHTML = 'Latitude: ' + data.lat
  long.innerHTML = 'longitude: ' + data.lon
  region.innerHTML = 'Region: ' + data.region
  r_code.innerHTML = 'Region code: ' + data.region_code
  tzone.innerHTML = 'Time zone: ' + data.timezone
  zipcode.innerHTML = 'Zip code: ' + data.zip
}
getMethod()
}}
const errorCallback = (error) => {
  alert('Turn on your location first!')
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}


//leaflet map viewpoint
var map = L.map('map').setView([14.586242, 121.007538],5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 15,
}).addTo(map);
//create element for link to open with google map
var a = document.createElement('a'); 
var link = document.createTextNode("Open in google map");
a.appendChild(link); 
a.title = "google map"; 
a.style.textDecoration = "none"
//search button eventlistener
