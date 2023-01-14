/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from 'react';

import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tab, TabContext, TabItem, TabList, TabPanel } from 'components';
import { LIGHT_THEME } from 'styles/theme';
import Home from 'pages/Home';

/**
 *  References:
 *  https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples/tree/main/?fontsize=14&module=/src/__tests__/react-context.js&previewwindow=tests&file=/src/__tests__/react-context.js:159-252
 *  https://stackoverflow.com/questions/56828017/testing-usecontext-with-react-testing-library
 *  https://stackoverflow.com/questions/69020014/testing-arrow-key-keyboard-navigation-of-a-radio-button-group
 */
describe('TabContext ', () => {
    /**
     *  Test Default Value of TabContext
     */
    test('the value should be "undefined" by default', () => {
        let value;
        function Tabs() {
            value = useContext(TabContext);
            return null;
        }

        render(<Tabs />);

        expect(value).toBe(undefined);
    });

    /**
     *  References : https://stackoverflow.com/questions/66328549/testing-an-error-thrown-by-a-react-component-using-testing-library-and-jest
     *  Test whether if not wrapped inside TabProvider, it throws an Error
     */
    test('should throw error when not wrapped inside `TabProvider`', () => {
        const onClick = jest.fn();
        // To remove console.error that appears on terminal console during the Error test
        const consoleErrorFn = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

        expect(() =>
            render(
                <ThemeProvider theme={LIGHT_THEME}>
                    <Tab>
                        <TabList aria-label="navigation">
                            <TabItem label="1" value={1} index={1} onClick={onClick} />
                        </TabList>
                        <TabPanel value={1} index={1}>
                            <p>Tab Panel #1</p>
                        </TabPanel>
                    </Tab>
                </ThemeProvider>
            )
        ).toThrow('should use Tab inside TabContext!');

        // restore
        consoleErrorFn.mockRestore();
    });

    /**
     *  Test Keyboard Interaction
     *  [ArrowRight]
     */
    test('when press [ArrowRight], next tab should be focused', async () => {
        const { container } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <Home />
            </ThemeProvider>
        );

        const tabOne = container.querySelector('#tab-1')! as HTMLButtonElement;
        const tabTwo = container.querySelector('#tab-2')! as HTMLButtonElement;

        // initiate focus
        tabOne.focus();

        // initially, first tab should be focused
        expect(tabOne).toHaveFocus();
        await userEvent.type(tabOne, '{arrowright}');

        // after 'ArrowRight', second tab should have focus now
        expect(tabTwo).toHaveFocus();
        expect(tabTwo).toHaveAttribute('aria-selected', 'true');
    });

    /**
     *  Test Keyboard Interaction
     *  [ArrowLeft]
     */
    test('when press [ArrowLeft], previous tab should be focused', async () => {
        const { container } = render(
            <ThemeProvider theme={LIGHT_THEME}>
                <Home />
            </ThemeProvider>
        );

        const tabOne = container.querySelector('#tab-1')! as HTMLButtonElement;
        const tabThree = container.querySelector('#tab-3')! as HTMLButtonElement;

        // initiate focus
        tabOne.focus();

        // initially, first tab should be focused
        expect(tabOne).toHaveFocus();
        // after 'ArrowLeft', third tab should have focus
        await userEvent.type(tabOne, '{arrowleft}');

        expect(tabThree).toHaveFocus();
        expect(tabThree).toHaveAttribute('aria-selected', 'true');
    });
});
