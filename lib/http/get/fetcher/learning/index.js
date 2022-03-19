const guider = require("./guider");
const tree = require("./tree");
const content = require("./content");

module.exports = (http) => ({
  guider: guider(http),
  tree: tree(http),
  content: content(http),
});
