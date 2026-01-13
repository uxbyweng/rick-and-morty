// components/SearchBar/SearchBar.js
export function initSearchBar(searchBarElement, onSearch) {
    searchBarElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(searchBarElement);
        const query = formData.get("query").trim();

        onSearch(query);
    });
}
