// require('dotenv').config()
// console.log(process.env.MY_API_TOKEN)

const form = document.getElementById('form')
const search = document.getElementById('search')

const ip=document.getElementById('ip-addr')             // IP Address
const locationElement=document.getElementById('location')              // Location
const timeZone=document.getElementById('time-zone')             // TimeZone
const isp=document.getElementById('isp')                // ISP

var key = config.API_KEY;   

let searchValue

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchValue=search.value

    ip.innerHTML = searchValue                      // inserting IP Address into DOM

    search.value=''
    
    const getData = async ()=>{
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_OXawFuSmz7I0uzo7ODRTp86jkBWvl&ipAddress=${searchValue}`)
        const details = await response.json()
        console.log(details)
        
        const lat = details.location.lat
        const lng = details.location.lng
    
        const tzval = details.location.timezone         // getting timezone from API
        timeZone.innerHTML = tzval                      // inserting into DOM
    
        const ispval = details.isp                      // getting Internet Service Provider
        isp.innerHTML = ispval                          // inserting into DOM
    
        const locate = details.location.city                      // getting Internet Service Provider
        locationElement.innerHTML = locate                          // inserting into DOM
        var mymap = L.map('map').setView([lat,lng], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(mymap);
        
            var popup = L.popup()
            .setLatLng([lat,lng])
            .setContent("I am a standalone popup.")
            .openOn(mymap);
        
            L.marker([lat,lng]).addTo(mymap)
                .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
    }
    
    getData()


})


/****    Map    *******/
// var mymap = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// 		maxZoom: 18,
// 		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
// 			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 		id: 'mapbox/streets-v11',
// 		tileSize: 512,
// 		zoomOffset: -1
// 	}).addTo(mymap);

//     var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

//     L.marker([51.5, -0.09]).addTo(mymap)
// 		.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();


