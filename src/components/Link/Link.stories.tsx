import { Link } from "./Link";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Link",
  },
};
