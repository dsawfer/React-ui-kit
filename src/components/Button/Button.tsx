import React from "react";

import s from "./Button.module.css";
import t from "../../styles/typography.module.css";
import { cn } from "../../utils/cn";

type ButtonTheme = "primary" | "secondary" | "outline" | "flat";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps {
  /**
   * Blocks access and modification of the element
   */
  disabled?: boolean;
  /**
   * Defines theme of button
   */
  theme?: ButtonTheme;
  /**
   * The button type is normal, for submitting form data to the server or for clearing the form
   */
  type?: ButtonType;
  /**
   * Button content (maybe icon or text)
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const { disabled = false, theme = "primary", type = "button" } = props;

  return (
    <button
      className={cn(t.BodyL_bold, s.Button, s[`Button_${theme}`])}
      onClick={props.onClick}
      type={type}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};
