/* 
Kibo premier league is here! We're building a football betting app for Kibo 

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

const game = {
  team1: "Squad 4",
  team2: "Squad 11",
  players: [
    [
      "Victor",
      "Ayomide",
      "Goodnews",
      "Simeon",
      "Emmanuel",
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

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Squad 4 (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Squad 4 (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Olamide', 'James' and 'Bayo'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Muhammed', 'Wasiu', 'Rob' and 'Seun'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
