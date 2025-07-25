import { Avatar, type AvatarProps } from "antd";
import { createStyles } from "antd-style";

type StyledAvatarProps = AvatarProps & { color: "red" | "blue" };

const useStyles = createStyles(
  ({ cx, prefixCls, token }, props: StyledAvatarProps) => {
    const { customizedToken } = token;
    const { color } = props;
    const { Avatar: customAvatarToken } = customizedToken;
    const { iconFontSizeSM, iconFontSizeLG, iconFontSize } = customAvatarToken;

    const createSizeStyles = (size: string, fontSize: number) => ({
      [`&.${prefixCls}-avatar-${size}`]: {
        [`.${prefixCls}-avatar-string`]: {
          fontSize,
        },
      },
    });

    return {
      avatar: {
        backgroundColor: cx({
          [token["red-5"]]: color === "red",
          [token["blue-5"]]: color === "blue",
        }),

        [`.${prefixCls}-avatar-string`]: {
          fontSize: iconFontSize,
        },

        ...createSizeStyles("sm", iconFontSizeSM),
        ...createSizeStyles("lg", iconFontSizeLG),
      },
    };
  }
);

export const StyledAvatar = (props: StyledAvatarProps) => {
  const { styles } = useStyles(props);

  return <Avatar {...props} className={styles.avatar} />;
};
