import React from "react";

import s from "./Input.module.css";
import { cn } from "../../utils/cn";
import t from "../../styles/typography.module.css";

interface InputProps {
  autocomplete?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: InputProps) => {
  const { autocomplete = false, autofocus = false, type = "text" } = props;

  return (
    <input
      className={cn(t.BodyL_bold, s.Input)}
      autoComplete={autocomplete ? "on" : "off"}
      autoFocus={autofocus}
      disabled={props.disabled}
      required={props.required}
      type={type}
      placeholder={props.placeholder}
      value={props.value}
      onInput={props.onInput}
    />
  );
};
