import { IconBase, IconBaseProps } from "./IconBase/IconBase";

type IconColor = "white" | "black";
type IconSize = 24 | 32;

interface IconProps extends IconBaseProps {
  color?: IconColor;
  size?: IconSize;
}

export const Icon = (props: IconProps) => {
  const { color = "white", size = 24 } = props;

  return <IconBase name={props.name} />;
};
