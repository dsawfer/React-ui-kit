import React from "react";

import s from "./Link.module.css";

export interface LinkProps {
  /**
   * Specifies the address of the document to navigate to
   */
  href?: string;
  /**
   * The name of the window or frame where the browser will load the document
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * Link content
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Link = (props: LinkProps) => {
  const { target = "_self" } = props;

  return (
    <a
      className={s.Link}
      href={props.href}
      target={target}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};
