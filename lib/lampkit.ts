import getterComposition, { compositionInterface } from "./http/get";
import fetch, { RequestInit } from "node-fetch";

export interface constructorInterface {
  url?: URL;
}

export default class Lampkit {
  #apiUrl: URL = new URL("https://api.bellshade.org/");
  #dataGetter: compositionInterface;

  constructor(args: constructorInterface) {
    if (args?.url) this.#apiUrl = new URL(args.url);
    this.#dataGetter = getterComposition(this.http.bind(this));
  }

  http(url: string, args?: RequestInit) {
    const concat = `${this.#apiUrl.origin}${url}`;
    if (args) return fetch(concat, args);

    return fetch(concat);
  }

  get url() {
    return this.#apiUrl;
  }

  set url(url) {
    this.#apiUrl = new URL(url);
    this.#dataGetter = getterComposition(this.http.bind(this));
  }

  get get() {
    return this.#dataGetter;
  }
}
