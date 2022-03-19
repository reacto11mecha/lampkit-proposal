const pullRequestCheck = (http) => (username) =>
  http(`/pr_check/${username}`).then((res) => res.json());

module.exports = pullRequestCheck;
