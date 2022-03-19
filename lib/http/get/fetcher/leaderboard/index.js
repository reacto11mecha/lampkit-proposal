const pullRequest = require("./pullRequest");
const contribution = require("./contribution");

module.exports = (http) => ({
  pullRequest: pullRequest(http),
  contribution: contribution(http),
});
