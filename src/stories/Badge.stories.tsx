import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../lib/components/Icons';
import Badge from '../../lib/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    size: 'medium',
    badgeState: 'success',
    variant: 'outlined',
    icon: <Icon name="Star" />,
  },
  argTypes: {
    size: {
      options: ['medium', 'small', 'tiny'],
      control: { type: 'select' },
      description: 'The size of the badge',
    },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'inline-radio' },
      description: 'The visual style of the badge',
    },
    badgeState: {
      options: ['default', 'success', 'warning', 'error', 'info'],
      control: { type: 'select' },
      description: 'The state of the badge',
    },
    icon: {
      control: 'object',
      description: 'The icon to display inside the badge',
    },
    customClassName: {
      control: 'text',
      description: 'The custom class name of the badge',
    },
  },
};
