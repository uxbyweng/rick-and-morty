export function createCharacterCard(character) {
    const card = document.createElement("li");
    card.classList.add("card");

    let typeText = character.type || "Unknown";

    let status = character.status;
    if (character.status === "Dead") {
        status = " 💀";
    } else if (character.status === "unknown") {
        status = "Unknown";
    } else {
        character.status;
    }

    const occurrences = character.episode.length;

    card.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src="${character.image}"
        alt="${character.name}"
      />
      <div class="card__image-gradient"></div>
    </div>

    <div class="card__content">
      <h2 class="card__title">${character.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${status}</dd>

        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${typeText}</dd>

        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${occurrences}</dd>
      </dl>
    </div>
  `;

    return card;
}
