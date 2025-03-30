import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../../lib/components/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: <div>Hover over me</div>,
    tooltipLabel: 'This is a tooltip',
    position: 'top',
    customClassName: '',
  },
  argTypes: {
    position: {
      control: {
        type: 'radio',
        options: ['top', 'bottom', 'left', 'right'],
      },
      description: 'The position of the tooltip',
      defaultValue: 'top',
    },
    children: {
      control: 'object',
      description: 'The content to display inside the tooltip',
    },
    tooltipLabel: {
      control: 'text',
      description: 'The label text of the tooltip',
    },
    customClassName: {
      control: 'text',
      description: 'Custom class name for the tooltip',
    },
  },
};
