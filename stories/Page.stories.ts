import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { expect, userEvent, within } from 'storybook/test';

import { Page } from './Page';

const pageArgs = {
  header: {
    brand: '◆',
    brandTitle: 'Acme',
    welcomePrefix: 'Welcome,',
    loginLabel: 'Log in',
    logoutLabel: 'Log out',
    createAccountLabel: 'Sign up',
  },
  title: 'Pages in Storybook',
  intro: 'We recommend building UIs with a component-driven process starting with atomic components and ending with pages.',
  guidance: 'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app.',
  patterns: ['Use a higher-level connected component.', 'Assemble data in the page component from your services.'],
  outro: 'Get a guided tutorial on component-driven development. Read more in the docs.',
  tipLabel: 'Tip',
  tipText: 'Adjust the width of the canvas with the Viewports addon in the toolbar.',
  userName: 'Jane Doe',
};

const meta = {
  title: 'Example/Page',
  component: Page,
  args: pageArgs,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
