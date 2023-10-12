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
            primarygray: string;
            boxShadow: string;
            forms: {
                primarygray: string;
                secondGray: string;
                tirdyGray: string;
                backround: string;
            };
        }
        fonts: {
            primary: string;
            secondary: string;
            sizePrimary: string;
            sizeSecondary: string;
        }
    }
}