app.controller("MapController", function($scope, MapService){
	var center = MapService.coords;
	var mapOptions = {      //options of the map
        center: {
            lat: center.lat || 39.7391536,
            lng: center.lng || -104.9847034
        },
        //center: {lat: 47.3690239, lng: 8.5380326},
        zoom: 15
    };
    var map = MapService.initMap(document.getElementById('map-canvas'), mapOptions); //initialize the map
    MapService.addPlace(map, MapService.coords)
})