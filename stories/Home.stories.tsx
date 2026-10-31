import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Home from '../app/page';
import { novaContent } from '../app/nova-content';
import '../app/globals.css';
import '../app/glass.css';

const meta = {
  title: 'Portfolio/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    content: novaContent,
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyPortfolio: Story = {
  args: {
    content: {
      ...novaContent,
      projects: [],
      descriptions: [],
      labels: {
        ...novaContent.labels,
        projectCount: '00',
      },
    },
  },
};
