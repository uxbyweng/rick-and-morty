// components/SearchBar/SearchBar.js
export function createSearchBar(header, onSearch) {
    header.innerHTML = `
    <h1 class="title">Rick and More</h1>
    <div class="search-bar-container" data-js="search-bar-container">
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

    const searchBarElement = header.querySelector('[data-js="search-bar"]');

    searchBarElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const query = searchBarElement.elements.query.value.trim();
        onSearch(query);
    });
}
