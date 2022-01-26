import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// https://storybook.js.org/docs/react/writing-stories/decorators
export const decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
