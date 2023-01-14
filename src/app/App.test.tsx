import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';

import { lightTheme } from 'styles/theme';
import App from 'app/App';

describe('App', () => {
    test('renders App', () => {
        const theme = lightTheme;

        render(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        );
        const buttonElement = screen.getByText(/LIGHT/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('changes to light mode', () => {
        const theme = lightTheme;

        render(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(/LIGHT/i));
        expect(screen.getByText(/DARK/i)).toBeInTheDocument();
    });
});
