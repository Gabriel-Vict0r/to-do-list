import { DefaultTheme } from "styled-components"
import calc from "../../utils/calcFontSize"
export const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        primary: '#BB86FC',
        secondary: '#03dac5',
        tirdy: '#1e1e24',
        background: "#363636",
        text: '#A7A6A6',
        primarygray: 'black',
        boxShadow: 'none',
        forms: {
            primarygray: '#414040',
            secondGray: '#222',
            tirdyGray: '#ccc9c9',
            backround: '#363636',
        }
    },

    fonts: {
        primary: 'Nunito',
        secondary: 'PT sans',
        sizePrimary: calc(32),
        sizeSecondary: calc(20)
    }
}