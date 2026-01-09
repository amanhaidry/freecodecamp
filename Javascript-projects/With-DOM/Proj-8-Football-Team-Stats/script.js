// players data
const players = [
  { name: "Lionel Messi", position: "forward", isCaptain: true },
  { name: "Cristiano Ronaldo", position: "forward", isCaptain: false },
  { name: "Kevin De Bruyne", position: "midfielder", isCaptain: false },
  { name: "N'Golo Kanté", position: "midfielder", isCaptain: false },
  { name: "Virgil van Dijk", position: "defender", isCaptain: false },
  { name: "Sergio Ramos", position: "defender", isCaptain: false },
  { name: "Andrew Robertson", position: "defender", isCaptain: false },
  { name: "Joshua Kimmich", position: "midfielder", isCaptain: false },
  { name: "Robert Lewandowski", position: "forward", isCaptain: false },
  { name: "Manuel Neuer", position: "goalkeeper", isCaptain: false },
  { name: "Alisson Becker", position: "goalkeeper", isCaptain: false },
  { name: "Thibaut Courtois", position: "goalkeeper", isCaptain: false },
];

// football team data
const footballTeam = {
  team: "Dream FC",
  year: 2026,
  headCoach: "Alex Ferguson",
  players: players
};

// DOM elements
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const selectEl = document.getElementById("players");
const playerCardsEl = document.getElementById("player-cards");

// populate team info
headCoachEl.innerText = footballTeam.headCoach;
teamEl.innerText = footballTeam.team;
yearEl.innerText = footballTeam.year;

// function to display players
function displayPlayers(players) {
  playerCardsEl.innerHTML = ""; //cleared previous cards

  players.forEach((player) => {
    const cardDivEl = document.createElement("div");
    cardDivEl.classList.add("player-card");

    const nameHeadingEl = document.createElement("h2");
    nameHeadingEl.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const positionParagraphEl = document.createElement("p");
    positionParagraphEl.textContent = `Position: ${player.position}`;

    cardDivEl.appendChild(nameHeadingEl);
    cardDivEl.appendChild(positionParagraphEl);

    playerCardsEl.appendChild(cardDivEl);
  });
}

//initial rendering (all players)
displayPlayers(footballTeam.players);

// event listener for position filter
selectEl.addEventListener("change", () => {
  const selectedVal = selectEl.value;

  if (selectedVal == "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter((player) => {
      return player.position == selectedVal;
    });
    displayPlayers(filteredPlayers);
  }
});
