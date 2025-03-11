import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '../../lib/components/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Design System/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {
  args: {
    progress: 50,
    isRightSidePercentage: false,
    disabled: false,
  },
  argTypes: {
    progress: {
      control: 'number',
      description: 'The progress value of the progress bar',
    },
    isRightSidePercentage: {
      control: 'boolean',
      description: 'The right side percentage state of the progress bar',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the progress bar',
    },
    customClassName: {
      control: 'text',
      description: 'Custom class name for the progress bar',
    },
  },
};
