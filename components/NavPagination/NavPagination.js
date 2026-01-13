export function createPagination({
  className = "navigation__pagination",
  testId = "pagination",
} = {}) {
  const span = document.createElement("span");
  span.className = className;
  span.setAttribute("data-js", testId);
  span.textContent = "1 / 1";
  return span;
}

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
