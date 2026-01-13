import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { initSearchBar } from "./components/SearchBar/SearchBar.js";
import { initNavButtons } from "./components/NavButton/NavButton.js";
import {
  setPaginationText,
  showNoResults,
} from "./components/NavPagination/NavPagination.js";

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

initSearchBar(searchBar, (query) => {
  searchQuery = query;
  page = 1;
  fetchCharacters();
});

console.log(maxPage);

initNavButtons({
  nextButton,
  prevButton,
  getPage: () => page,
  setPage: (newPage) => (page = newPage),
  getMaxPage: () => maxPage,
  onNavigate: fetchCharacters,
});

// Fetch
async function fetchCharacters() {
  console.clear();

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(
      searchQuery
    )}`
  ); // first 20 Characters

  if (!response.ok) {
    cardContainer.innerHTML = "";
    pagination.textContent = "1 / 1";

    const li = document.createElement("li");
    li.textContent = "No characters found.";
    cardContainer.append(li);
    maxPage = 1;
    return;
  }

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
