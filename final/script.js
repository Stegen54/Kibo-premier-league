const game = {
  team1: "Squad 4",
  team2: "Squad 11",
  players: [
    [
      "Victor",
      "Ayomide",
      "Goodnews",
      "Simeon",
      "Emmaunel",
      "Funminiyi",
      "Travor",
      "Muhammed",
      "Wasiu",
      "Seun",
      "Rob",
    ],
    [
      "Sulaimon",
      "Chris",
      "Dami",
      "Akanji",
      "Wole",
      "Micheal",
      "Demola",
      "Noah",
      "Bolade",
      "David",
      "Kunle",
    ],
  ],
  score: "4:0",
  scored: ["Ayomide", "Emmanuel", "Ayomide", "Rob"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Olamide", "James", "Bayo"];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals("Muhammed", "Wasiu", "Rob", "Seun");
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
