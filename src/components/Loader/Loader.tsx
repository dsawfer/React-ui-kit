import { Icon } from "../Icon/Icon";

import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.Loader}>
      <Icon name="loader" />
    </div>
  );
};
