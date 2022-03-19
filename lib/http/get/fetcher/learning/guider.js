const guider = (http) => () =>
  http("/learning/guide").then((res) => res.json());

module.exports = guider;
