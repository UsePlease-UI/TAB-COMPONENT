import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from 'pages/Home';

import { LIGHT_THEME } from 'styles/theme';

describe('<HOME />', () => {
    it('renders Home Component', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={LIGHT_THEME}>
                    <Home />
                </ThemeProvider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('if it is accessible when TabPanel#value === TabContext#value', () => {
        const { getByText } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <Home />
            </ThemeProvider>
        );

        expect(getByText('Tab Panel #1')).toBeInTheDocument();
    });

    test('if it is [hidden] when TabPanel#value !== TabContext#value', () => {
        const { getByText } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <Home />
            </ThemeProvider>
        );

        expect(getByText('Tab Panel #2')).not.toBeVisible();
    });
});
