import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

//=================
// STATE
//=================
let maxPage = 1;
let page = 1;
let characterIndex = 0;
let characters = [];
/* let searchQuery = ""; */

// ================
// Fetch
//=================
async function fetchCharacters(startIndex = 0) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  ); // first 20 Characters
  // const response = await fetch("https://rickandmortyapi.com/api/character/?page=4");
  const data = await response.json();

  console.log(data.results);

  maxPage = data.info.pages;
  characters = data.results;

  characterIndex = startIndex;
  renderCharacter();

  //============================
  // RENDER ONE CARD
  //============================
  function renderCharacter() {
    cardContainer.innerHTML = "";

    const charachter = characters[characterIndex];
    cardContainer.append(createCharacterCard(charachter));

    pagination.textContent = `Page ${page} / ${maxPage} - character ${
      characterIndex + 1
    } / ${charachter.length}`;
  }

  //==========================
  // BUTTONS
  //==========================
  nextButton.onclick = () => {
    if (characterIndex < characters.length - 1) {
      characterIndex += 1;
      renderCharacter();
      return;
    }

    if (page < maxPage) {
      page += 1;
      fetchCharacters(0);
    }
  };

  prevButton.onclick = () => {
    if (characterIndex > 0) {
      characterIndex -= 1;
      renderCharacter();
      return;
    }

    if (page > 1) {
      page -= 1;
      fetchCharacters(19);
    }
  };
}
//================
// LOAD
//================
fetchCharacters();
