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

// States
let maxPage = 0;
let page = 0;
let character = 0;
let searchQuery = "";
nextButton.addEventListener("click", ()=> {
  if (character >= 5){
    page += 1
  }
  character += 1
  fetchCharacters()
})
prevButton.addEventListener("click", ()=> {
  character -= 1
  fetchCharacters()
})
// Fetch
async function fetchCharacters() {
    console.clear();

    const response = await fetch("https://rickandmortyapi.com/api/character"); // first 20 Characters
    const data = await response.json();

    cardContainer.innerHTML = "";

    data.results.forEach((character) => {
        const card = createCharacterCard(character)
        cardContainer.append(card);
    });
}
fetchCharacters();

