import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import { TabProvider, TabPanel } from 'components';
import { lightTheme } from 'styles/theme';

describe('<TabPanel /> ', () => {
    it('renders Tab Panel with children', () => {
        const setValue = jest.fn();

        render(
            <ThemeProvider theme={lightTheme}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={1}>
                        children
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = screen.getByText('children');
        expect(tabPanel).toBeInTheDocument();
    });

    test('has a [role="tabpanel"]', () => {
        const setValue = jest.fn();

        render(
            <ThemeProvider theme={lightTheme}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={1}>
                        Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = screen.getByRole('tabpanel');
        expect(tabPanel).toBeInTheDocument();
    });

    test('when selected, has a [hidden="false"]', () => {
        const setValue = jest.fn();

        render(
            <ThemeProvider theme={lightTheme}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={1}>
                        #1 Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = screen.getByRole('tabpanel');
        expect(tabPanel).toHaveProperty('hidden', false);
    });

    test('when not selected, has a [hidden="true"]', () => {
        const setValue = jest.fn();

        render(
            <ThemeProvider theme={lightTheme}>
                <TabProvider value={1} setValue={setValue}>
                    <TabPanel value={1} index={2}>
                        #2 Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        );

        const tabPanel = screen.getByText('#2 Tab Panel');
        expect(tabPanel).toHaveProperty('hidden', true);
    });
});
