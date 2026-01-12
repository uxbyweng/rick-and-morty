const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// Fetch
async function fetchCharacters() {
    console.clear();

    const response = await fetch("https://rickandmortyapi.com/api/character"); // first 20 Characters
    // const response = await fetch("https://rickandmortyapi.com/api/character/?page=4");
    const data = await response.json();

    console.log(data.results);

    /* Funktion, die die Card erstellt und die Paramter übermittelt
    createCharacterCard(data.results);
    */
}

fetchCharacters();
