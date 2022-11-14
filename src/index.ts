interface Character {
	name: string;
	features: Features[]; 
}

interface Features {
	title: string,
	description: string
}

function newCharacter() {
	var charaterInput = (<HTMLInputElement>document.getElementById("characterName"))?.value;
	if(charaterInput) {
		window.localStorage.setItem(`${charaterInput}`, charaterInput);
		
	}
	console.log(charaterInput)
}

function createApp() {
	const indexFile = document.getElementById("app");

	var characterInput = document.createElement('input');
	characterInput.id = 'characterName';

	var characterInputButton = document.createElement('button');
	characterInputButton.textContent = "Create Character";

	indexFile?.appendChild(characterInput);
	indexFile?.appendChild(characterInputButton);

	characterInputButton.addEventListener('click', function() {
		newCharacter();
	})

}

createApp();