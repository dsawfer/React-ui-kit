import {Loader} from "./Loader";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
    title: "Loader",
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
    args: {
    },
};