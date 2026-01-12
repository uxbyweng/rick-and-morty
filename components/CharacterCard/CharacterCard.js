export function createCharacterCard(characters) {
  const card = elementCreator("li", "card");
  const imgContainer = elementCreator("div", "card__image-container");

  const imgElement = elementCreator("img", "card__image");
  imgElement.src = characters.image;
  imgContainer.append(imgElement);

  const cardGradient = elementCreator("div", "card__image-gradient");

  const cardContent = elementCreator("div", "card__content");

  const h2 = elementCreator("h2", "card__title", characters.name);

  const cardInfo = elementCreator("dl", "card__info");

  const statusTitle = elementCreator("dt", "card__info-title", "Status");

  const descriptionTitle = elementCreator(
    "dd",
    "card__info-description",
    characters.status
  );

  const typeTitle = elementCreator("dt", "card__info-title", "Type");

  const typeValue = elementCreator(
    "dd",
    "card__info-description",
    characters.type
  );

  const occurrence = elementCreator("dt", "card__infor-title", "Occurrences");

  const occurrenceValue = elementCreator(
    "dd",
    "card__info-description",
    characters.episode.length
  );

  card.append(imgContainer, cardGradient, cardContent);
  cardContent.append(h2, cardInfo);
  cardInfo.append(
    statusTitle,
    descriptionTitle,
    typeTitle,
    typeValue,
    occurrence,
    occurrenceValue
  );

  return card;
}
//this function has three parameters first one is element tag, second is class and the third one is textcontent
function elementCreator(elTag, className, content) {
  const element = document.createElement(elTag);
  element.className = className;
  element.textContent = content;
  return element;
}
