import { DefaultTheme } from "styled-components";
import calc from "../../utils/calcFontSize";
export const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        primary: '#de3c4b',
        secondary: '#7f7eff',
        tirdy: '#1e1e24',

        background: "#333",
        text: '#f9fbf2',
        primarygray: 'black',
        forms: {
            primarygray: '#414040',
            secondGray: '#EFEFEF',
            tirdyGray: '',
            backround: '#FFFFFF',
        }
    },
    fonts: {
        primary: 'Nunito',
        secondary: 'PT sans',
        sizePrimary: calc(32),
        sizeSecondary: calc(16)
    }
}