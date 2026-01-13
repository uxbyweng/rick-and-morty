export function initNavButtons({
  nextButton,
  prevButton,
  getPage,
  setPage,
  getMaxPage,
  onNavigate,
}) {
  nextButton.addEventListener("click", () => {
    const maxPage = getMaxPage();
    let page = getPage();

    page = page === maxPage ? 1 : page + 1;

    setPage(page);
    onNavigate();
  });

  prevButton.addEventListener("click", () => {
    const maxPage = getMaxPage();
    let page = getPage();

    page = page === 1 ? maxPage : page - 1;

    setPage(page);
    onNavigate();
  });
}
