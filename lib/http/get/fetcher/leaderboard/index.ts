import { RequestInit } from "node-fetch";

import pullRequest, { resultInterface as PRInterface } from "./pullRequest";
import contribution, {
  resultInterface as CONTRIBInterface,
} from "./contribution";

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export interface leaderboardType {
  pullRequest: () => Promise<PRInterface[]>;
  contribution: () => Promise<CONTRIBInterface[]>;
}

export default function leaderboard(http: httpType) {
  return {
    pullRequest: pullRequest(http),
    contribution: contribution(http),
  };
}
