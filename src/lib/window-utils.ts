import { noop } from "./noop";

const windowValidator = (windowFunction: any) => {
  if (typeof window !== "undefined") {
    windowFunction();
  } else {
    noop();
  }
};

export const writeToClipboard = (text: string) =>
  windowValidator(() => navigator.clipboard.writeText(text));
