import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

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
    const data = await response.json();

    cardContainer.innerHTML = "";

    data.results.forEach((character) => {
        const card = createCharacterCard(character.name, character.image, character.status, character.type, character.episode.length);
        cardContainer.append(card);
    });

    // for (let i = 0; i < data.results.length; i++) {
    //     const characterName = data.results[i].name;
    //     const characterImage = data.results[i].image;
    //     const characterStatus = data.results[i].status;
    //     const characterType = data.results[i].type;
    //     const characterOccurency = data.results[i].episode.length;

    //     const card = createCharacterCard(characterName, characterImage, characterStatus, characterType, characterOccurency);
    //     cardContainer.append(card);
    // }
}

fetchCharacters();
