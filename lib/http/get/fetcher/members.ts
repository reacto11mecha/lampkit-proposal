import { RequestInit } from "node-fetch";

export interface User {
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
}

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export type membersReturnType = User[];
export type membersType = () => Promise<membersReturnType>;

const members = (http: httpType) => (): Promise<membersReturnType> =>
  http("/").then((res) => res.json());

export default members;
