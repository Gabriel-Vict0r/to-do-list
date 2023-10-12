import { DefaultTheme } from "styled-components"
import calc from "../../utils/calcFontSize"
export const light: DefaultTheme = {
    title: 'light',
    colors: {
        primary: '#de3c4b',
        secondary: '#7f7eff',
        tirdy: '#1e1e24',

        background: "#f9fbf2",
        text: '#333',
        primarygray: 'black',
        forms: {
            primarygray: '#414040',
            secondGray: '#EFEFEF',
            tirdyGray: '#ccc9c9',
            backround: '#FFFFFF',
        }
    },

    fonts: {
        primary: 'Nunito',
        secondary: 'PT sans',
        sizePrimary: calc(32),
        sizeSecondary: calc(20)
    }
}