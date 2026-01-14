import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { createButton } from "./components/NavButton/NavButton.js";
import { createNavPagination } from "./components/NavPagination/NavPagination.js";
import { createSearchBar } from "./components/SearchBar/SearchBar.js";

const header = document.querySelector('[data-js="header"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 0;
let page = 1;
let searchQuery = "";
createSearchBar(header, (query) => {
  searchQuery = query;
  page = 1;
  fetchCharacters();
});
const prevButton = createButton(
  "button button--Prev",
  "button-prev",
  "Previous"
);
const nextButton = createButton("button button--next", "button-next", "Next");
const pagination = createNavPagination();
navigation.append(prevButton, pagination, nextButton);

nextButton.addEventListener("click", () => {
  page === maxPage ? (page = 1) : page++;
  fetchCharacters();
});
prevButton.addEventListener("click", () => {
  page === 1 ? (page = maxPage) : page--;
  fetchCharacters();
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
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}
fetchCharacters();
