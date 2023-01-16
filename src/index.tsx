import React from 'react';

import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import App from 'app/App';
import reset from 'styles/reset';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Global styles={reset} />
        <App />
    </React.StrictMode>
);
