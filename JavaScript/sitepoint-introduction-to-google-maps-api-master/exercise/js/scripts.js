var map;

var mapStyle = [
	{
		'stylers':[
			{'saturation':-100},
			{'gamma':1}
		]
	},
	{
		'elementType': 'labels.text.stroke',
		'stylers':[
			{'visibility':'on'}
		]
	},
	{
		'featureType':'road',
		'elementType':'geometry',
		'stylers':[
			{'visibility':'simplified'}
		]
	},
	{
		'featureType':'water',
		'stylers':[
			{'visibility':'on'},
			{'saturation':50},
			{'gamma':0},
			{'hue':'#50a5d1'}
		]
	},
	{
		'featureType':'landscape',
		'elementType':'all',
		'stylers':[
			{'color':'#e2e2e2'}
		]
	}
];

//function run on DOM load
function loadMap() {
	var mapId = document.getElementById('map');
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
	map = new google.maps.Map(mapId, mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap());