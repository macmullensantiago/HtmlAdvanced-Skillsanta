
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocation);
}
else {
    document.getElementById('location').innerHTML ='Geolocation is not supported'
}

function getLocation(position){
   if(position){
    console.log(position);
    document.getElementById('location').innerHTML =  position.coords.latitude;
   }
    
}