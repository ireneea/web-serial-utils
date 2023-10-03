import { Serial } from "./serial";

export {};

declare global {
  interface Navigator {
    serial?: Serial;
  }
}

