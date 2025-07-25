import type { ThemeConfig } from "antd";
import { ThemeProvider } from "antd-style";
import type { OverrideToken } from "antd/es/theme/interface";
import type { PropsWithChildren } from "react";

const avatarToken: OverrideToken["Avatar"] = {
  textFontSize: 18,
  textFontSizeLG: 28,
  textFontSizeSM: 12,
};

type CustomAvatarToken = {
  iconFontSize: number;
  iconFontSizeLG: number;
  iconFontSizeSM: number;
};

const customAvatarToken: CustomAvatarToken = {
  iconFontSize: 18,
  iconFontSizeLG: 28,
  iconFontSizeSM: 12,
};

const theme: ThemeConfig = {
  components: {
    Avatar: avatarToken,
  },
};

const customToken = {
  customizedToken: {
    Avatar: customAvatarToken,
  },
};

export type CustomTokenType = typeof customToken;

export const ThemeWrapper = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme} customToken={customToken}>
      {props.children}
    </ThemeProvider>
  );
};
