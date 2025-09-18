import type { ClientUtils } from "./utils";

declare global {
  const agt: {
    utils: ClientUtils;
  };
}