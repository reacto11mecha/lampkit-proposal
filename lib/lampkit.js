const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const commonCb = (res) => res.json();

const getterComposition = (http) => ({
  members: () => http("/").then(commonCb),
  publicRepositories: () => http("/repos").then(commonCb),
  contributors: () => http("/contributors").then(commonCb),
  pullRequestCheck: (username) => http(`/pr_check/${username}`).then(commonCb),

  leaderboard: {
    pullRequest: () => http("/leaderboard/pr").then(commonCb),
    contribution: () => http("/leaderboard/contribution").then(commonCb),
  },

  learning: {
    guider: () => http("/learning/guide").then(commonCb),
    tree: (repo) => http(`/learning/tree/${repo}`).then(commonCb),
    content: (repo, path) =>
      http(`/learning/content/${repo}?path=${encodeURIComponent(path)}`),
  },
});

class Lampkit {
  #apiUrl = new URL("http://localhost:3000");
  #dataGetter;

  constructor(args) {
    if (args?.url) this.#apiUrl = new URL(args.url);

    this.#dataGetter = getterComposition(this.http.bind(this));
  }

  http(url, args) {
    const concat = `${this.#apiUrl.origin}${url}`;
    if (args) return fetch(concat, args);

    return fetch(concat);
  }

  get url() {
    return this.#apiUrl;
  }

  set url(url) {
    this.#apiUrl = new URL(url);
    this.#dataGetter = getterComposition(this.http);
  }

  get get() {
    return this.#dataGetter;
  }
}

const rest = new Lampkit();
rest.get.learning
  .content("PHP", "algorithms/BackTracking/PathFinding/PathFinding.php")
  .then((d) => d.text())
  .then(console.log);
