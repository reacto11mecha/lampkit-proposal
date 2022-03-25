import { RequestInit } from "node-fetch";

import guider, { returnInterface as guiderReturnInterface } from "./guider";
import tree, { returnInterface as treeReturnInterface } from "./tree";
import content, { returnType } from "./content";

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export interface leaderboardType {
  guider: () => Promise<guiderReturnInterface[]>;
  tree: (repo: string) => Promise<treeReturnInterface[]>;
  content: (repo: string, path: string) => Promise<returnType>;
}

export default function learning(http: httpType) {
  return {
    guider: guider(http),
    tree: tree(http),
    content: content(http),
  };
}
