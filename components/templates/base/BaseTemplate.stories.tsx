// BaseTemplate.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import BaseTemplate from "./BaseTemplate";
import { mockBaseTemplateProps } from "./BaseTemplate.mock";

const meta: Meta<typeof BaseTemplate> = {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    sampleTextProps: {
      control: "text",
      defaultValue: "Hello World",
      description: "This is a sample text",
      name: "Sample Text",
      type: { name: "string", required: true },
    },
  },
  // More on parameters: https://storybook.js.org/docs/react/api/parameters
  tags: ["autodocs"],
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
