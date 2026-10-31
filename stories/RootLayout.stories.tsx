import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import RootLayout from '../app/layout';

const meta = {
  title: 'App/RootLayout',
  component: RootLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    params: Promise.resolve({}),
    children: null,
  },
  render: (args) => (
    <RootLayout {...args}>
      <main style={{ padding: 32 }}>
        <h1>Layout preview</h1>
        <p>Content rendered inside the root layout.</p>
      </main>
    </RootLayout>
  ),
};
