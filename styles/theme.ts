import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        red: '#DA2535',
        gray: '#616161',
        black: '#292929',
        white: {
            100: '#FBFBFB',
            200: '#F3F3F3'
        },
    },

    fonts: {
        heading: 'Inter',
        body: 'Montserrat',
    },

    styles: {
        global: {
            body: {
                bg: 'white.100',
                color: 'black'
            }
        }
    }
})