import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../lib/components/Icons';
import Chip from '../../lib/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Design System/Chip',
  component: Chip,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    label: 'Test Label',
    size: 'medium',
    chipState: 'success',
    variant: 'outlined',
    iconLeft: <Icon name="Star" />,
  },
  argTypes: {
    size: {
      options: ['medium', 'small', 'tiny'],
      control: { type: 'select' },
      description: 'The size of the chip',
    },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'inline-radio' },
      description: 'The visual style of the chip',
    },
    chipState: {
      options: ['default', 'success', 'warning', 'error', 'info'],
      control: { type: 'select' },
      description: 'The state of the chip',
    },
    iconLeft: {
      control: 'object',
      description: 'The icon to display inside the chip',
    },
    onClose: {
      action: 'clicked',
      description: 'The click event handler of the close button',
    },
    customClassName: {
      control: 'text',
      description: 'Custom class name for the chip',
    },
  },
};
