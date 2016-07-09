var map; // Global map variable

// get the location to display the coordinates
var lat = document.getElementById('latcoords');
var lng = document.getElementById('loncoords');


//function run on DOM load
function loadMap() {
	var mapOptions = {
		center: new google.maps.LatLng(25.761680, -80.19179),
		zoom: 12,
		minZoom: 2,
		maxZoom: 18,
		
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [google.maps.MapTypeId.ROADMAP,
									 google.maps.MapTypeId.SATELLITE,
									 google.maps.MapTypeId.HYBRID,
									 google.maps.MapTypeId.TERRAIN],
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		// tilt: 45,
		
		// zoom controls
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		
		streetViewControl: false,

		styles: unsaturatedBrowns
	};

	var mapId = document.getElementById('map'); 
	
	map = new google.maps.Map(mapId, mapOptions); // Create the map

	updateCurrentLatLng(map.getCenter());
	mapEventListeners();
}

function mapEventListeners() {
	var mouseMoveChanged = google.maps.event.addListener(map, 'mousemove', 
		function(event) {
			updateCurrentLatLng(event.latLng);
		}
	); // Mouse move updates the coordinates

	// var listenerIdle = google.maps.event.addListenerOnce(map, 'idle', 
	// 	function() {
	// 		alert('Map is ready!');	
	// 	}
	// );

	var listenerDragEnd = google.maps.event.addListener(map, 'dragend', 
		function() {
			updateUrlLocation(map.getCenter(), map.getZoom());
		}
	); // drag end for updating url

	var listenerZoomChanged = google.maps.event.addListener(map, 'zoom_changed', 
		function() {
			updateUrlLocation(map.getCenter(), map.getZoom());
		}
	); // zoom changed for updating URL
		
}  

function updateCurrentLatLng(latLng) {
	lat.innerHTML = latLng.lat();
	lng.innerHTML = latLng.lng();
} // Update the position of the mouse in the latitude and longitude


function updateUrlLocation(center, zoom) {
	var url = '?lat='+center.lat()+'&lon='+center.lng()+'&zoom='+zoom;
	window.history.pushState({center: "center", zoom: "zoom" }, 'map center', url);
} // set lat and lon and zoom into url

google.maps.event.addDomListener(window, 'load', loadMap()); // Load the map