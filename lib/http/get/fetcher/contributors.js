const contributors = (http) => () =>
  http("/contributors").then((res) => res.json());

module.exports = contributors;
