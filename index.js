import { initMatrixBackground } from "./components/MatrixBackground/MatrixBackground.js";
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { initSearchBar } from "./components/SearchBar/SearchBar.js";
import {
  createNavButton,
  initNavButtons,
} from "./components/NavButton/NavButton.js";
import {
  createPagination,
  setPaginationText,
  showNoResults,
} from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

// Matrix Background
initMatrixBackground("matrixCanvas");

// Navigation created JS
const prevButton = createNavButton({
  label: "previous",
  className: "button button--prev",
  testId: "button-prev",
});

const pagination = createPagination({
  className: "navigation__pagination",
  testId: "pagination",
});

const nextButton = createNavButton({
  label: "next",
  className: "button button--next",
  testId: "button-next",
});

navigation.append(prevButton, pagination, nextButton);

// State
let maxPage = 0;
let page = 1;
let searchQuery = "";

//Search
initSearchBar(searchBar, (query) => {
  searchQuery = query;
  page = 1;
  fetchCharacters();
});

//  Buttons logic
initNavButtons({
  nextButton,
  prevButton,
  getPage: () => page,
  setPage: (newPage) => (page = newPage),
  getMaxPage: () => maxPage,
  onNavigate: fetchCharacters,
});

//  Fetch
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(
      searchQuery
    )}`
  );

  if (!response.ok) {
    showNoResults({ cardContainer, paginationElement: pagination });
    maxPage = 1;
    return;
  }

  const data = await response.json();

  maxPage = data.info.pages;
  setPaginationText(pagination, page, maxPage);

  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    cardContainer.append(createCharacterCard(character));
  });
}

fetchCharacters();
