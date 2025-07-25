import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, type ThemeConfig } from "antd";
import type { OverrideToken } from "antd/es/theme/interface";
import type { PropsWithChildren } from "react";

const avatarToken: OverrideToken["Avatar"] = {
  textFontSize: 18,
  textFontSizeLG: 28,
  textFontSizeSM: 12,
};

const theme: ThemeConfig = {
  components: {
    Avatar: avatarToken,
  },
};

export const ThemeWrapper = (props: PropsWithChildren) => {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={theme}>{props.children}</ConfigProvider>
    </StyleProvider>
  );
};
