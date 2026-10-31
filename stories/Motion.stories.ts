import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Motion from '../app/motion';

const meta = {
  title: 'Portfolio/Motion',
  component: Motion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    revision: 'default',
  },
} satisfies Meta<typeof Motion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Revised: Story = {
  args: {
    revision: 'alternate-content',
  },
};
