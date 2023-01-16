import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';

import { TabProvider, TabList, TabItem } from 'components';

import { LIGHT_THEME } from 'styles/theme';

describe('<TabItem />', () => {
    it('renders TabItem with given label', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const text = screen.getByText('1');
        expect(text).toBeInTheDocument();
    });

    test('has [role="tab"]', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tabItem = screen.getByRole('tab');
        expect(tabItem).toBeInTheDocument();
    });

    test('when selected, has [aria-selected="true"]', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tabItem = screen.getByRole('tab');
        expect(tabItem).toHaveAttribute('aria-selected', 'true');
    });

    test('has matching aria-controls given index', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('aria-controls', 'tabpanel-1');
    });

    test('when focused, should not have tabindex', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tab = screen.getByRole('tab');
        expect(tab).not.toHaveAttribute('tabindex');
    });

    test('when not focused, has [tabindex="-1"]', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="2" value={1} index={2} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tab = screen.getByRole('tab');
        expect(tab).toHaveAttribute('tabindex', '-1');
    });

    test('when given icon, shows Icon', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        const icon = {
            iconElement: <div>Icon</div>,
            iconSize: [20, 20],
            iconActiveColor: '#000000',
            iconInactiveColor: '#eeeeee'
        };

        render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem icon={icon} label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tabIcon = screen.getByText('Icon');
        expect(tabIcon).toBeInTheDocument();
    });

    test('when focused, shows tab indicator', () => {
        const setValue = jest.fn();
        const onClick = jest.fn();

        const { container } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={setValue}>
                    <TabList aria-label="navigation">
                        <TabItem label="1" value={1} index={1} onClick={onClick} />
                    </TabList>
                </TabProvider>
            </ThemeProvider>
        );

        const tab = container.querySelector('#tab-indicator-1');
        expect(tab).toBeInTheDocument();
    });
});
