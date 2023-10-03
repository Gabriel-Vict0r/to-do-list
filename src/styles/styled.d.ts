import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tirdy: string;

            background: string;
            text: string;
        }
        fonts: {
            sizePrimary: string;
            sizeSecondary: string;
        }
    }
}