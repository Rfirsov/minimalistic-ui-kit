import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../../lib/components/Tabs';
import { IconName } from '../../lib/components/Icons/Icon';

interface Tab {
  label: string;
  iconName?: IconName;
  content: JSX.Element;
}

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs: Tab[] = [
  {
    label: 'Tab 1',
    iconName: 'Star',
    content: <p>Content for Tab 1</p>,
  },
  {
    label: 'Tab 2',
    iconName: 'User',
    content: <p>Content for Tab 2</p>,
  },
  {
    label: 'Tab 3',
    iconName: 'ArrowLeft',
    content: <p>Content for Tab 3</p>,
  },
];

export const Basic: Story = {
  args: {
    tabs,
    iconSide: 'left',
    disabled: false,
    customClassName: '',
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'The tabs data',
    },
    iconSide: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'The icon side of the tabs',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the tabs',
    },
    onClickTab: {
      action: 'clicked',
      description: 'The click event handler of the tabs',
    },
    customClassName: {
      control: 'text',
      description: 'The custom class name of the tabs',
    },
  },
};
