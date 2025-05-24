import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../../lib/components/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Design System/Loader',
  component: Loader,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Basic: Story = {
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['giant', 'large', 'medium', 'small', 'tiny'],
      control: { type: 'select' },
      description: 'The size of the loader',
    },
  },
};
