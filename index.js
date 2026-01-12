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
const maxPage = 1;
const page = 1;
const searchQuery = "";
const characterData = {}
// Fetch
async function fetchCharacters() {
  console.clear();

  const response = await fetch("https://rickandmortyapi.com/api/character"); // first 20 Characters
  // const response = await fetch("https://rickandmortyapi.com/api/character/?page=4");
  const data = await response.json();

  console.log(data)

// createCharacterCard(data.results[0]);
//   // return data.results;
//   // console.log(data.results[0].image)
  data.results.forEach((character)=> {
    let card = createCharacterCard(character)
    return cardContainer.append(card)
  })
 
}

fetchCharacters();
