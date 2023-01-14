import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';

import { LIGHT_THEME } from 'styles/theme';
import App from 'app/App';

describe('App', () => {
    test('renders App', () => {
        const theme = LIGHT_THEME;

        render(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        );
        const buttonElement = screen.getByText(/LIGHT/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('changes to light mode', () => {
        const theme = LIGHT_THEME;

        render(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(/LIGHT/i));
        expect(screen.getByText(/DARK/i)).toBeInTheDocument();
    });
});
