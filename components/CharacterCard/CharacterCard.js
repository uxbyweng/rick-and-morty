export function createCharacterCard(characters) {

  const card = document.createElement("li");
  card.classList.add("card");
  console.log(characters);

  const imgContainer = document.createElement("div")
  imgContainer.className = "card__image-container"

  const imgElement = document.createElement("img")
  imgElement.className = "card__image"
  imgElement.src = `${characters.image}`
  imgContainer.append(imgElement)

  card.append(imgContainer)

  const cardGradient = document.createElement("div")
  cardGradient.className = "card__image-gradient"
  card.append(cardGradient)

  const cardContent = document.createElement("div")
  cardContent.className = "card__content"
  card.append(cardContent)

  const h2 = document.createElement("h2")
  h2.className = "card__title"
  h2.textContent = characters.name
  cardContent.append(h2)

  const cardInfo = document.createElement("dl")
  cardInfo.className = "card__info"
  cardContent.append(cardInfo)

  const statusTitle = document.createElement("dt")
  statusTitle.className = "card__info-title"
  statusTitle.textContent = "Status"
  cardInfo.append(statusTitle)

  const descriptionTitle = document.createElement("dd")
  descriptionTitle.className = "card__info-description"
  descriptionTitle.textContent = characters.status
  cardInfo.append(descriptionTitle)
  
  const typeTitle = document.createElement("dt")
  typeTitle.className = "card__info-title"
  typeTitle.textContent = "Type"
  cardInfo.append(typeTitle)

  const typeValue = document.createElement("dd")
  typeValue.className = "card__info-description"
  typeValue.textContent = characters.type
  cardInfo.append(typeValue)

  const occurrence = document.createElement("dt")
  occurrence.className = "card__info-title"
  occurrence.textContent = "Occurrences"
  cardInfo.append(occurrence)

  const occurrenceValue = document.createElement("dd")
  occurrenceValue.className = "card__info-description"
  occurrenceValue.textContent = characters.episode.length
  cardInfo.append(occurrenceValue)
  
  return card;
}
