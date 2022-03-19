const contribution = (http) => () =>
  http("/leaderboard/contribution").then((res) => res.json());

module.exports = contribution;
