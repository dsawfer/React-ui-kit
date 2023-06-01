import React from "react";
import s from './InputWrapper.module.css'
import t from "../../../styles/typography.module.css";
import {cn} from "../../../utils/cn";
interface InputWrapperProps {
    title?: string;
    hint?: string;
    children?: React.ReactNode;
}

export const InputWrapper = (props: InputWrapperProps) => {
    return <div className={s.Wrapper}>
        <h1 className={cn(t.BodyXL_bold, s.Title)}>{props.title}</h1>
        {props.children}
        <h6 className={cn(t.BodyS, s.Hint)}>{props.hint}</h6>
    </div>
}