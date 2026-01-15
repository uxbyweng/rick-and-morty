function createNavPagination(className = "navigation__pagination", attribute = "pagination", content = "1/1") {
    const span = document.createElement("span");
    span.className = className;
    span.setAttribute("data-js", attribute);
    span.textContent = content;
    return span;
}
function noResult(container) {
    document.querySelector(`[data-js="pagination"]`);
    container.innerHTML = "";
    document.querySelector(`[data-js="pagination"]`).innerHTML = "1 / 1<br>No entries.";
}

export { createNavPagination, noResult };
