import React from "react";

import s from "./Button.module.css";

type ButtonTheme = "primary" | "secondary" | "outline" | "flat";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps {
  disabled?: boolean;
  theme?: ButtonTheme;
  type?: ButtonType;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const { disabled = false, theme = "primary", type = "button" } = props;

  return (
    <button
      className={s.Button}
      onClick={props.onClick}
      type={type}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};
