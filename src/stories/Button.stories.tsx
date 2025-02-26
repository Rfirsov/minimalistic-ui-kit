import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../lib/components/Button';
import { Icon } from '../../lib/components/Icons';

const meta = {
  title: 'Design System/Button',
  component: Button,
  args: {
    labelText: 'Button',
    onClick: () => {},
    size: 'medium',
    variant: 'contained',
    disabled: false,
  },
  argTypes: {
    labelText: {
      control: 'text',
      description: 'The label text of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'The click event handler of the button',
    },
    size: {
      options: ['giant', 'large', 'medium', 'small', 'tiny'],
      control: { type: 'select' },
      description: 'The size of the button',
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'inline-radio' },
      description: 'The visual style of the button',
    },
    iconLeft: {
      control: 'object',
      description: 'The icon to display on the left side of the button',
    },
    iconRight: {
      control: 'object',
      description: 'The icon to display on the right side of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    parentClassName: {
      control: 'text',
      description: 'The parent class name of the button use with ButtonGroup',
    },
    customClassName: {
      control: 'text',
      description: 'The custom class name of the button',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'contained',
    iconLeft: <Icon name="ArrowLeft" />,
    iconRight: <Icon name="ArrowRight" />,
  },
  parameters: {
    size: {
      default: 'medium',
    },
    variant: {
      default: 'contained',
    },
  },
};
