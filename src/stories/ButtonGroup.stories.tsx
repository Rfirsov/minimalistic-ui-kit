import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../lib/components/Button';
import { Icon } from '../../lib/components/Icons';
import ButtonGroup from '../../lib/components/ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
  args: {
    children: (
      <ButtonGroup>
        <Button labelText="Button 1" iconLeft={<Icon name="ArrowLeft" />} />
        <Button labelText="Button 2" iconRight={<Icon name="ArrowRight" />} />
        <Button labelText="Button 3" iconLeft={<Icon name="ArrowLeft" />} />
        <Button labelText="Button 4" customClassName="custom" />
      </ButtonGroup>
    ),
  },
};
