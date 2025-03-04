import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../lib/components/Icons';
import Chip from '../../lib/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Design System/Input',
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
};
