import { ReactComponent as Loader } from "./assets/loader.svg";
import { ReactComponent as Close } from "./assets/close.svg";

type IconBaseName = "loader" | "close";

export interface IconBaseProps {
  name: IconBaseName;
}

export const IconBase = (props: IconBaseProps) => {
  switch (props.name) {
    case "loader":
      return <Loader />;
    case "close":
      return <Close />;
  }
};
