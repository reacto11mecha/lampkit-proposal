const { isText } = require("istextorbinary");

const content = (http) => (repo, path) =>
  http(`/learning/content/${repo}?path=${encodeURIComponent(path)}`).then(
    async (res) => {
      const text = await res.clone().text();

      if (isText(null, text)) return text;
      return await res.arrayBuffer();
    }
  );

module.exports = content;
