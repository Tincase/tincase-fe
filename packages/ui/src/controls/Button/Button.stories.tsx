import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../../layouts';

import { Button } from './Button';

const meta = {
  title: 'Controls / Button',
  component: Button,
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/* ----------------------------------------
 * Stories
 * ----------------------------------------*/

export const Variants: Story = {
  render: (args) => (
    <Stack gap={20}>
      <Button {...args} variant="solid" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="light-solid" />
      <Button {...args} variant="link" />
      <Button {...args} variant="text" />
    </Stack>
  ),
};

export const WithSizes: Story = {
  render: (args) => (
    <Stack gap={20}>
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </Stack>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: 'Icon',
  },
};

export const WithFill: Story = {
  args: {
    fill: true,
  },
};

export const WithLoading: Story = {
  args: {
    loading: true,
  },
};
