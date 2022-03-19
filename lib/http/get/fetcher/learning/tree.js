const tree = (http) => (repo) =>
  http(`/learning/tree/${repo}`).then((res) => res.json());

module.exports = tree;
