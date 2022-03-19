const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getterComposition = require("./http/get");

module.exports = class Lampkit {
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
};
