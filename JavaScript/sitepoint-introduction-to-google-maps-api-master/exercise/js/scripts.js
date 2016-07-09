var map;

function loadMap() {
	var mapId = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(25.761680, -80.19179),
		zoom: 18,
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
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		tilt: 45,
		
		// zoom controls
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		
		streetViewControl: false,

		// pan controls are deprecated
		// panControl: true,
		// panControlOptions: {

		// 	position: google.maps.ControlPosition.BOTTOM_LEFT
		// },

		// Overview Map Controls are deprecated in 3.22+
		// overviewMapControl: true,
		// overviewMapControlOptions: {
		// 	opened: true
		// }
	};
	map = new google.maps.Map(mapId, mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap());