interface Character {
	id: string,
	name: string,
	features?: Features[] 
}

interface Features {
	title: string,
	type?: string,
	description: string
}

function newCharacter() {
	var charaterInputValue = (<HTMLInputElement>document.getElementById("characterName"))?.value;

	let character: Character = { id : crypto.randomUUID(), name : charaterInputValue }; 
	if(charaterInputValue) {
		window.localStorage.setItem(`${charaterInputValue}`, character.id);
		
	}
	getAllCharacters()
}

function createIndex() {
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

function getAllCharacters() {
	Object.keys(localStorage).forEach(function(key, value){
		var characters = document.createElement('span');
		characters.textContent = key.toString();
		const indexFile = document.getElementById("app");
	
		indexFile?.appendChild(characters);
	})
};

createIndex();
getAllCharacters();

