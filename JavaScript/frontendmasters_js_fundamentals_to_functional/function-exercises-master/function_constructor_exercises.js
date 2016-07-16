var animalNames = ['Sheep', 'Liger', 'Big Bird'];

function AnimalMaker(name) {
	return {
		speak: function () {
			console.log("My name is ",name);
		},
		name: name,
		owner: 'Robert'
	};
};

for (var i = 0; i < animalNames.length; i++) {
	AnimalMaker(animalNames[i]).speak();
}

