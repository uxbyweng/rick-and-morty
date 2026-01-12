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

/* const card = createCharacterCard();
cardContainer.append(card); */

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Fetch
async function fetchCharacters() {
  console.clear();

  const response = await fetch("https://rickandmortyapi.com/api/character"); // first 20 Characters
  // const response = await fetch("https://rickandmortyapi.com/api/character/?page=4");
  const data = await response.json();

  console.log(data.results);

  cardContainer.innerHTML = "";

  /* Funktion, die die Card erstellt und die Paramter übermittelt
    createCharacterCard(data.results);
    */
  data.results.forEach((charachter) => {
    const card = createCharacterCard(charachter);
    cardContainer.append(card);
  });
}

fetchCharacters();
