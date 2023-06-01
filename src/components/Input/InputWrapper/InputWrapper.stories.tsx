import {InputWrapper} from "./InputWrapper";
import { Meta, StoryObj } from "@storybook/react";
import {Input} from "../Input";

const meta: Meta<typeof InputWrapper> = {
    title: "InputWrapper",
    component: InputWrapper,
};

export default meta;
type Story = StoryObj<typeof InputWrapper>;

export const Primary: Story = {
    args: {
        title: 'Title',
        hint: 'Hint',
        children: <Input></Input>
    },
};