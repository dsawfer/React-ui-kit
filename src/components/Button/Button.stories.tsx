import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    theme: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    theme: "outline",
    children: "Button",
  },
};

export const Flat: Story = {
  args: {
    theme: "flat",
    children: "Button",
  },
};

