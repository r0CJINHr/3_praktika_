function sortAscending() {
  const cardsContainer = document.getElementById("cards-container");
  console.log(cardsContainer);
  const cards = cardsContainer.querySelectorAll("post");
  console.log(cards);
  const sortedCards = Array.from(cards).sort((a, b) => {
    const priceA = Number(a.querySelector(".card-text").textContent.slice(2));
    const priceB = Number(b.querySelector(".card-text").textContent.slice(2));
    return priceA - priceB;
  });
  console.log(sortedCards);
  cardsContainer.innerHTML = "";
  sortedCards.forEach((post) => {
    cardsContainer.appendChild(post);
  });
}

function sortDescending() {
  const cardsContainer = document.getElementById("cards-container");
  const cards = cardsContainer.querySelector("post");
  const sortedCards = Array.from(cards).sort((a, b) => {
    const priceA = Number(a.querySelector(".price").textContent.slice(2));
    const priceB = Number(b.querySelector(".price").textContent.slice(2));
    return priceB - priceA;
  });
  cardsContainer.innerHTML = "";
  sortedCards.forEach((post) => {
    cardsContainer.appendChild(post);
  });
}
