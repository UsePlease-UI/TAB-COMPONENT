import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import { Tab } from 'components';
import { LIGHT_THEME } from 'styles/theme';

describe('<Tab />', () => {
    it('renders Tab with children', () => {
        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <Tab>children</Tab>
            </ThemeProvider>
        );

        const text = screen.getByText('children');
        expect(text).toBeInTheDocument();
    });
});
