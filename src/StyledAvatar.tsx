import { Avatar, type AvatarProps } from "antd";
import { cva } from "class-variance-authority";
import cn from "classnames";

type StyledAvatarProps = AvatarProps & { color: "red" | "blue" };

const colorVariants = cva(null, {
  variants: {
    color: {
      red: "bg-red-500",
      blue: "bg-blue-500",
    },
  },
});

const sizeVariants = cva(null, {
  variants: {
    size: {
      small: "[&_.ant-avatar-string]:text-xs",
      default: "[&_.ant-avatar-string]:text-sm",
      large: "[&_.ant-avatar-string]:text-lg",
    },
  },
});

export const StyledAvatar = (props: StyledAvatarProps) => {
  const { color, size = "default" } = props;

  return (
    <Avatar
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      className={cn(colorVariants({ color }), sizeVariants({ size }))}
      {...props}
    />
  );
};
