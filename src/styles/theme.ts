import { LIGHT_THEME, DARK_THEME } from 'components/theme';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            background: string;
            divider: string;
        };
        text: {
            primary: string;
            inactive: string;
        };
    }
}

export { DARK_THEME, LIGHT_THEME };
