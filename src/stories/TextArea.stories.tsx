import type { Meta, StoryObj } from '@storybook/react';

import TextArea from '../../lib/components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Design System/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {
    label: 'Test Label',
    size: 'medium',
    variant: 'filled',
    placeholder: 'Enter text',
    textAreaState: 'success',
    textAreaMessage: 'Success Message',
    value: 'Test Value',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text of the text area',
    },
    size: {
      options: ['large', 'medium'],
      control: { type: 'select' },
      description: 'The size of the text area',
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'inline-radio' },
      description: 'The visual style of the text area',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text of the text area',
    },
    textAreaState: {
      options: ['error', 'success', 'warning', 'info'],
      control: { type: 'inline-radio' },
      description: 'The state of the text area',
    },
    textAreaMessage: {
      control: 'text',
      description: 'The message text of the text area',
    },
  },
};
