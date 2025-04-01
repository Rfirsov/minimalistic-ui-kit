import type { Meta, StoryObj } from '@storybook/react';
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';
import { Icon } from '../../lib/components/Icons';
import Breadcrumbs from '../../lib/components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [withRouter],
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/products',
        handle: 'Products',
      },
    }),
  },
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
      { label: 'Laptops', path: '/products/laptops' },
    ],
    iconLeft: <Icon name="Star" />,
    disabled: false,
    customClassName: '',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'The items of the breadcrumbs',
    },
    iconLeft: {
      control: 'object',
      description: 'The icon to display inside the breadcrumbs',
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the breadcrumbs',
    },
    customClassName: {
      control: 'text',
      description: 'Custom class name for the breadcrumbs',
    },
  },
};
