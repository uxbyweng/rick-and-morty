// SearchBar.js

export function createSearchBar(searchBarContainer, onSearch) {
    searchBarContainer.innerHTML = `
    <form action="" class="search-bar" data-js="search-bar">
      <input
        name="query"
        class="search-bar__input"
        type="text"
        placeholder="search characters"
        aria-label="character name"
      />
      <button class="search-bar__button" aria-label="search for character">
        <img
          class="search-bar__icon"
          src="assets/magnifying-glass.png"
          alt=""
        />
      </button>
    </form>
  `;

    const searchBarElement = searchBarContainer.querySelector('[data-js="search-bar"]');

    searchBarElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = searchBarElement.elements.query.value.trim();
        onSearch(query);
    });
}
