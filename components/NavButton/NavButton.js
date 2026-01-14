function createButton(className, attribute, text){
  const button = document.createElement("button")
  button.className = className
  button.setAttribute("data-js", attribute)
  button.textContent = text
  return button
}
const prevButton = createButton(
  "button button--Prev",
  "button-prev",
  "Previous"
);
const nextButton = createButton("button button--next", "button-next", "Next");

export {prevButton, nextButton}
