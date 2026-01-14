import { initMatrixBackground } from "./components/MatrixBackground/MatrixBackground.js";
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { prevButton, nextButton } from "./components/NavButton/NavButton.js";
import {
  createNavPagination,
  noResult,
} from "./components/NavPagination/NavPagination.js";
import { createSearchBar } from "./components/SearchBar/SearchBar.js";

// DOM Selector - Wir selektieren nur die Container, weil die UI-Elemente (SearchBar, Buttons, Pagination) per JS erzeugen werden.
const header = document.querySelector('[data-js="header"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 0;
let page = 1;
let searchQuery = "";

// Matrix
initMatrixBackground();

// Searchbar
//Callback das er kümmert sich um Input/Submit index.js bekommt nur das Ergebnis (query) und entscheidet was pasiert.
createSearchBar(header, (query) => {
  searchQuery = query;
  // !!! Wichtig bei neuer Suche kann es weniger Seiten geben, das wegen start auf Seite 1 verhindert page out of range 404/keine Ergebnisse.

  page = 1;
  fetchCharacters();
});

// Navigation
const pagination = createNavPagination();
nextButton.addEventListener("click", () => {
  page === maxPage ? (page = 1) : page++;
  fetchCharacters();
});
prevButton.addEventListener("click", () => {
  page === 1 ? (page = maxPage) : page--;
  // wird nach jeder Änderung aufgerufen, damit UI immer zur aktuellen page/searchQuery passt.

  fetchCharacters();
});
navigation.append(prevButton, pagination, nextButton);

// Fetch
async function fetchCharacters() {
  console.clear();
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(
      searchQuery
    )}`
  ); // "encodeURIComponent" schützt die URL bei Leerzeichen/Sonderzeichen // first 20 Characters
  // API liefert bei “nichts gefunden” typischerweise "404", statt Crash/leerem UI zeigen wir eine klare Meldung und stabilisieren Pagination.

  if (!response.ok) {
    noResult(cardContainer, pagination);
    maxPage = 1;
    return;
  }
  //maxPage muss nach jedem fetch aktualisiert werden bei Search kann maxPage kleiner sein,
  // "pagination.textContent" zeigt dem User den aktuellen Stand.
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}
//lädt initial Seite 1 ohne Search und rendert sofort die ersten 20 Charaktere

fetchCharacters();
