const form = document.getElementById("gameForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const game = {
    name: document.getElementById("gameName").value,
    gender: document.getElementById("gender").value,
    releaseYear: document.getElementById("releaseYear").value,
    platform: document.getElementById("platform").value,
    rating: document.getElementById("rating").value,
  };

  localStorage.setItem("games", JSON.stringify(game));
  console.log(
    JSON.parse(
      localStorage.getItem(`${document.getElementById("gameName").value}`)
    )
  );

  loadGames();
});

function getGames() {
  let games = JSON.parse(localStorage.games) || [];

  return games;
}

function loadGames() {
  const games = getGames();

  const table = document.getElementById("table-body");

  table.innerHTML = "";

  games.forEach((game, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${game.name}</td>
    <td>${game.gender}</td>
    <td>${game.releaseYear}</td>`;

    table.appendChild(tr);
  });
}
