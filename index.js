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
let page = 1;
let searchQuery = "";

console.log(maxPage);
nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    page = 1
  }else{
    page += 1;
    fetchCharacters();
  }
});
prevButton.addEventListener("click", () => {
  if (page === 1) {
    page = 42
  }else{
    page -= 1;
    fetchCharacters();
  }
});
// Fetch
async function fetchCharacters() {
  console.clear();

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  ); // first 20 Characters
  const data = await response.json();
  console.log(data);
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";

  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}
fetchCharacters();
console.log(maxPage);
