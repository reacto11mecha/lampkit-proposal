const pullRequest = (http) => () =>
  http("/leaderboard/pr").then((res) => res.json());

module.exports = pullRequest;
