import { LIGHT_THEME, DARK_THEME } from 'components/theme';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            textPrimary: string;
            background: string;
            divider: string;
        };
    }
}

export const lightTheme = {
    colors: LIGHT_THEME
};

export const darkTheme = {
    colors: DARK_THEME
};
