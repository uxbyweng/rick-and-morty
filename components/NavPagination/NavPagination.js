export function createNavPagination(className= "navigation__pagination", attribute="pagination",content="1/1"){
  const span = document.createElement("span")
  span.className = className
  span.setAttribute("data-jsx", attribute)
  span.textContent = content
  return span
}