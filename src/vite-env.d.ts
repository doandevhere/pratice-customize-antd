/// <reference types="vite/client" />

import type { CustomTokenType } from "./ThemeWrapper";

declare module "antd-style" {
  interface CustomToken {
    customizedToken: CustomTokenType["customizedToken"];
  }
}
