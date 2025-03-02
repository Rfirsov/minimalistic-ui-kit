import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../../lib/components/Icons';
import Input from '../../lib/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: 'Test Label',
    type: 'text',
    size: 'medium',
    variant: 'filled',
    placeholder: 'Enter text',
    inputState: 'success',
    inputMessage: 'Success Message',
    value: 'Test Value',
    iconLeft: <Icon name="Star" />,
  },
};
