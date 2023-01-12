import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from 'pages/Home';
import { lightTheme } from 'styles/theme';

// USER 관점에서 테스트를 진행
// setState는 테스트하지 않음
// 유저가 버튼을 클릭했을 때
// 유저가 ~ 을 했을 때
describe('Tab Example', () => {
    // test : renders Tab Element
    test('renders Tab', () => {
        const tree = renderer
            .create(
                <ThemeProvider theme={lightTheme}>
                    <Home />
                </ThemeProvider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('is accessible when TabPanel#value === TabContext#value', () => {
        const { getByText } = render(
            <ThemeProvider theme={lightTheme}>
                <Home />
            </ThemeProvider>
        );

        expect(getByText('Tab Panel #1')).toBeInTheDocument();
    });

    test('is [hidden] when TabPanel#value !== TabContext#value', () => {
        const { getByText } = render(
            <ThemeProvider theme={lightTheme}>
                <Home />
            </ThemeProvider>
        );

        expect(getByText('Tab Panel #2')).not.toBeVisible();
    });
});
