import { RequestInit } from "node-fetch";

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export interface User {
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}
export interface contributor {
  user: User;
  contributions: number;
}
export interface contributorRepository {
  repo: string;
  contributors: contributor[];
}
export type contributorsReturnType = contributorRepository[];
export type contributorsType = () => Promise<contributorsReturnType>;

const contributors = (http: httpType) => (): Promise<contributorsReturnType> =>
  http("/contributors").then((res) => res.json());

export default contributors;
