import { lightTabTheme, darkTabTheme } from 'components/theme';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            tab: {
                primary: string;
                textPrimary: string;
                background: string;
                divider: string;
            };
        };
    }
}

export const lightTheme = {
    colors: {
        ...lightTabTheme
    }
};

export const darkTheme = {
    colors: {
        ...darkTabTheme
    }
};
