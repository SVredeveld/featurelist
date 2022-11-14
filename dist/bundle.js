/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function newCharacter() {
    var _a;
    var charaterInput = (_a = document.getElementById("characterName")) === null || _a === void 0 ? void 0 : _a.value;
    if (charaterInput) {
        window.localStorage.setItem(`${charaterInput}`, charaterInput);
    }
    console.log(charaterInput);
}
function createApp() {
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
createApp();

/******/ })()
;
//# sourceMappingURL=bundle.js.map