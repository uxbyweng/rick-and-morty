export function setPaginationText(paginationElement, page, maxPage) {
  paginationElement.textContent = `${page} / ${maxPage}`;
}

export function showNoResults({ cardContainer, paginationElement }) {
  cardContainer.innerHTML = "";
  paginationElement.textContent = "1 / 1";

  const li = document.createElement("li");
  li.textContent = "No characters found.";
  cardContainer.append(li);
}
