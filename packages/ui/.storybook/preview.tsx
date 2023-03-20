import type { Preview } from '@storybook/react';
import React from 'react';
import { TinCaseProvider } from '@tincase/provider';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <TinCaseProvider>
        <Story />
      </TinCaseProvider>
    ),
  ],
};

export default preview;
