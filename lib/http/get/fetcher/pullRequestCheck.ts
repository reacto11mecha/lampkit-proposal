import { RequestInit } from "node-fetch";
export type httpType = (url: string, args?: RequestInit) => Promise<Response>;

export interface User {
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}
export interface pullRequest {
  title: string;
  html_url: string;
  number: number;
  created_at: string;
  merged_at: string;
  repo: string;
}
export type prs_count = number;

export interface resultInterface {
  user: User;
  pull_request: pullRequest[];
  prs_count: prs_count;
}
export type pullRequestCheckType = (
  username: string
) => Promise<resultInterface>;

const pullRequestCheck =
  (http: httpType) =>
  (username: string): Promise<resultInterface> =>
    http(`/pr_check/${username}`).then((res) => res.json());

export default pullRequestCheck;
