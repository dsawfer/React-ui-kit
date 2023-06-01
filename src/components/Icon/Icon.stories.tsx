import {Icon} from "./Icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
    title: "Icon",
    component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
       name: 'loader'
    },
};