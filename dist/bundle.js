/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function newCharacter() {
    var _a;
    var charaterInputValue = (_a = document.getElementById("characterName")) === null || _a === void 0 ? void 0 : _a.value;
    let character = { id: crypto.randomUUID(), name: charaterInputValue };
    if (charaterInputValue) {
        window.localStorage.setItem(`${charaterInputValue}`, character.id);
    }
    getAllCharacters();
}
function createIndex() {
    const indexFile = document.getElementById("app");
    var characterInput = document.createElement('input');
    characterInput.id = 'characterName';
    var characterInputButton = document.createElement('button');
    characterInputButton.textContent = "Create Character";
    indexFile === null || indexFile === void 0 ? void 0 : indexFile.appendChild(characterInput);
    indexFile === null || indexFile === void 0 ? void 0 : indexFile.appendChild(characterInputButton);
    characterInputButton.addEventListener('click', function () {
        newCharacter();
    });
}
function getAllCharacters() {
    Object.keys(localStorage).forEach(function (key, value) {
        var characters = document.createElement('span');
        characters.textContent = key.toString();
        const indexFile = document.getElementById("app");
        indexFile === null || indexFile === void 0 ? void 0 : indexFile.appendChild(characters);
    });
}
;
createIndex();
getAllCharacters();

/******/ })()
;
//# sourceMappingURL=bundle.js.map