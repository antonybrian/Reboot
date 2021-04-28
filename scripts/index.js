let visit = document.getElementById("map-cta");
visit.addEventListener('click', showMap,false)
let map_container = document.getElementById("map-box")
let mapshown = false;
function showMap(){
   if(! mapshown){
       map_container.style.display = "block"
       mapshown = true;
       visit.innerText ="Hide Map"
   }else{
       map_container.style.display ="none"
       mapshown = false;
       visit.innerText ="Get Directions"
   }
    
}