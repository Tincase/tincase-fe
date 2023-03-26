import type { Meta, StoryObj } from '@storybook/react';

import { Center } from '../../layouts';

import { PlainCard } from './PlainCard';

const meta = {
  title: 'Containers / PlainCard',
  component: PlainCard,
} satisfies Meta<typeof PlainCard>;

export default meta;
type Story = StoryObj<typeof PlainCard>;

/* ----------------------------------------
 * Stories
 * ----------------------------------------*/

export const Sample: Story = {
  render: (args) => (
    <Center>
      <PlainCard {...args} />
    </Center>
  ),
};
