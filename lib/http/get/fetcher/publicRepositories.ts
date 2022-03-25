import { RequestInit } from "node-fetch";
export type httpType = (url: string, args?: RequestInit) => Promise<Response>;

export interface licenseInterface {
  key: string;
  name: string;
  spdx_id: string;
}
export interface repositoriesInterface {
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  license: licenseInterface;
  topics: string[];
}
export type publicRepositoriesType = () => Promise<repositoriesInterface[]>;

const publicRepositories =
  (http: httpType) => (): Promise<repositoriesInterface[]> =>
    http("/repos").then((res) => res.json());

export default publicRepositories;
