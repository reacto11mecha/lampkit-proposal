import { RequestInit } from "node-fetch";

import publicRepositories, {
  publicRepositoriesType,
} from "./fetcher/publicRepositories";
import pullRequestCheck, {
  pullRequestCheckType,
} from "./fetcher/pullRequestCheck";
import contributors, { contributorsType } from "./fetcher/contributors";
import members, { membersType } from "./fetcher/members";

import leaderboard, { leaderboardType } from "./fetcher/leaderboard";
import learning from "./fetcher/learning";

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export interface compositionInterface {
  members: membersType;
  leaderboard: leaderboardType;
  contributors: contributorsType;
  pullRequestCheck: pullRequestCheckType;
  publicRepositories: publicRepositoriesType;
}

export default function getterComposition(http: httpType) {
  return {
    members: members(http),
    publicRepositories: publicRepositories(http),
    contributors: contributors(http),
    pullRequestCheck: pullRequestCheck(http),

    leaderboard: leaderboard(http),
    learning: learning(http),
  };
}
