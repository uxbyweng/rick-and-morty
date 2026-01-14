export function createButton(className, attribute, text){
  const button = document.createElement("button")
  button.className = className
  button.setAttribute("data-js", attribute)
  button.textContent = text
  return button
}