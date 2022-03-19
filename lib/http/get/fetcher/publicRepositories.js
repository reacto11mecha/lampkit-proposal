const contributors = (http) => () => http("/repos").then((res) => res.json());

module.exports = contributors;
