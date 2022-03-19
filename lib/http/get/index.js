const publicRepositories = require("./fetcher/publicRepositories");
const pullRequestCheck = require("./fetcher/pullRequestCheck");
const contributors = require("./fetcher/contributors");
const members = require("./fetcher/members");

const leaderboard = require("./fetcher/leaderboard");
const learning = require("./fetcher/learning");

const getterComposition = (http) => ({
  members: members(http),
  publicRepositories: publicRepositories(http),
  contributors: contributors(http),
  pullRequestCheck: pullRequestCheck(http),

  leaderboard: leaderboard(http),
  learning: learning(http),
});

module.exports = getterComposition;
