import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';

import { TabProvider, TabPanel } from 'components';

import { LIGHT_THEME } from 'styles/theme';

describe('<TabPanel />', () => {
    it('renders Tab Panel component', () => {
        const setValue = jest.fn();

        const { getByText } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={1}>
                        Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = getByText('Tab Panel');
        expect(tabPanel).toBeInTheDocument();
    });

    test('renders a [role="tabpanel"]', () => {
        const setValue = jest.fn();

        const { getByText } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={1}>
                        Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = getByText('Tab Panel');
        expect(tabPanel).toHaveAttribute('role', 'tabpanel');
    });
});
