import { RequestInit } from "node-fetch";
export type httpType = (url: string, args?: RequestInit) => Promise<Response>;

export interface returnInterface {
  path: string;
  type: string;
}

const tree =
  (http: httpType) =>
  (repo: string): Promise<returnInterface[]> =>
    http(`/learning/tree/${repo}`).then((res) => res.json());

export default tree;
