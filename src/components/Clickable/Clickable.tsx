import React from "react";

export interface ClickableProps {
  /**
   * Defines type of clickable component
   */
  type?: "button" | "link";
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export const Clickable = (props: ClickableProps) => {};
