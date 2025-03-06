import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from '../../lib/components/RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Design System/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Basic: Story = {
  args: {
    label: 'Test Label',
    name: 'test',
    value: 'test',
    checked: false,
    disabled: false,
    isRightSideButton: false,
    onChange: () => {},
    customClassName: '',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text of the radio button',
    },
    name: {
      control: 'text',
      description: 'The name of the radio button',
    },
    value: {
      control: 'text',
      description: 'The value of the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'The checked state of the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the radio button',
    },
    isRightSideButton: {
      control: 'boolean',
      description: 'The right side button state of the radio button',
    },
    onChange: {
      action: 'clicked',
      description: 'The change event handler of the radio button',
    },
    customClassName: {
      control: 'text',
      description: 'The custom class name of the radio button',
    },
  },
};
