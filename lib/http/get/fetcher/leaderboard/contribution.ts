import { RequestInit } from "node-fetch";
export type httpType = (url: string, args?: RequestInit) => Promise<Response>;

export interface User {
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}
export interface contributionsInterface {
  contributions: number;
  repo: string;
}
export type contributions_count = number;

export interface resultInterface {
  user: User;
  pull_request: contributionsInterface[];
  contributions_count: contributions_count;
}

const contribution = (http: httpType) => (): Promise<resultInterface[]> =>
  http("/leaderboard/contribution").then((res) => res.json());

export default contribution;
