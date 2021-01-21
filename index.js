
function updatemap() {
    const url = "https://api.covid19api.com/live/country/india"
    fetch("./data.json")
   // fetch(url)
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp)
            rsp.data.forEach(element => {
                latitude = element.coordinates[0]
                longitude = element.coordinates[1]
                c = element.cases
                // r = element.recovered
                // a = element.active
                // d = element.deaths
                    new mapboxgl.Marker({
                        draggable: false,
                        color: `rgb(${c},0,0)`
                    }).setLngLat([latitude, longitude])
                        .addTo(map);

                
        });
        });
}
var interval = 50000;
setInterval(updatemap(), interval);
