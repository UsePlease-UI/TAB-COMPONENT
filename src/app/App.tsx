import { useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import Home from 'pages/Home';
import { darkTheme, lightTheme } from 'styles/theme';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 40px;
`;

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
`;

const ModeButton = styled.button<{ active: boolean }>`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid black;
    border-radius: 50%;
    outline: none;
    color: ${({ active }) => (active ? '#000000' : '#ffffff')};
    background-color: ${({ active }) => (active ? '#ffffff' : '#000000')};
`;

export default function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Wrapper>
                    <ModeButton type="button" active={isDark} onClick={() => setIsDark((prev) => !prev)}>
                        {isDark ? 'LIGHT' : 'DARK'}
                    </ModeButton>
                    <Home />
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
}
