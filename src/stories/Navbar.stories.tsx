import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './../../lib/components/Navbar';
import { NavLink } from '../../lib/types/Navlink';

export default {
  title: 'Design System/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Navbar>;

const mockLinks: NavLink[] = [
  {
    href: '/',
    active: true,
    content: {
      label: 'Home',
      icon: {
        name: 'ArrowBrCircle',
        side: 'left',
      },
    },
  },
  {
    href: '/profile',
    active: false,
    content: {
      label: 'Profile',
      icon: {
        name: 'User',
        side: 'right',
      },
    },
  },
  {
    href: '/settings',
    active: false,
    content: {
      label: 'Settings',
      subTitle: 'Account',
    },
  },
];

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  args: {
    links: mockLinks,
    fullWidth: true,
    linkPosition: 'center',
  },
  argTypes: {
    links: {
      control: 'object',
      description: 'The links to display in the navbar',
    },
  },
};
