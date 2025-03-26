import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../lib/components/Checkbox';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  args: {
    checked: true,
    indeterminate: false,
    fullWidth: true,
    isRightSideCheckbox: false,
    onChange: () => ({}),
    label: 'Example',
    disabled: false,
  },
  argTypes: {
    customClassName: {
      control: 'text',
      description: 'The custom class name of the button',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    checked: true,
    indeterminate: false,
    fullWidth: true,
    isRightSideCheckbox: false,
    onChange: () => ({}),
    label: 'Example',
    disabled: false,
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked state of the checkbox',
    },
    indeterminate: {
      control: 'boolean',
      description: 'The indeterminate state of the checkbox',
    },
    fullWidth: {
      control: 'boolean',
      description: 'The full width state of the checkbox',
    },
    isRightSideCheckbox: {
      control: 'boolean',
      description: 'The right side checkbox state of the checkbox',
    },
    onChange: {
      action: 'clicked',
      description: 'The change event handler of the checkbox',
    },
    label: {
      control: 'text',
      description: 'The label text of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the checkbox',
    },
  },
};
