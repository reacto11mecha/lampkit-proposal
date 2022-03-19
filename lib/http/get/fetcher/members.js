const members = (http) => () => http("/").then((res) => res.json());

module.exports = members;
