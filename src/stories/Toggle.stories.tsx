import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../../lib/components/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Design System/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  args: {
    initial: false,
    label: 'Test Label',
    isRightSideButton: false,
    disabled: false,
    customClassName: '',
  },
  argTypes: {
    initial: {
      control: 'boolean',
      description: 'The initial state of the toggle',
    },
    label: {
      control: 'text',
      description: 'The label text of the toggle',
    },
    onToggle: {
      action: 'clicked',
      description: 'The change event handler of the toggle',
    },
    isRightSideButton: {
      control: 'boolean',
      description: 'The right side button state of the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the toggle',
    },
    customClassName: {
      control: 'text',
      description: 'The custom class name of the toggle',
    },
  },
};
