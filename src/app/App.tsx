import { useState } from 'react';

import { ThemeProvider } from '@emotion/react';

import Home from 'pages/Home';
import { darkTheme, lightTheme } from 'styles/theme';

export default function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <div className="App">
                <button type="button" onClick={() => setIsDark((prev) => !prev)}>
                    {isDark ? 'DARK' : 'LIGHT'}
                </button>
                <Home />
            </div>
        </ThemeProvider>
    );
}
