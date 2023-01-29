import { extendTheme } from "@chakra-ui/react";
// import '@fontsource/montserrat/300.css'
// import '@fontsource/montserrat/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { Button } from "./button";
import { Input } from "./input";

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };

export const theme = extendTheme({
    colors:{
        brand: {
            5: '#e6f3ff',
            10: '#cce7ff',
            20: '#b3dbff',
            40: '#99cfff',
            50: '#80c4ff',
            60: '#66b8ff',
            70: '#4dacff',
            80: '#33a0ff',
            90: '#1a94ff',
            100: '#0088ff',
            200: '#007ae6',
            300: '#006dcc',
            400: '#005fb3',
            500: '#005299',
            600: '#004480',
            700: '#003666',
            800: '#00294c',
            900: '#001b33',
        }
    },
    fonts:{
        body: 'Inter, sans-serif',
    },
    styles:{
        global: ()=>({
            body:{
                bg: 'gray.200',
                fontSize: '14px'
            }
        })
    },
    components:{
        Button,
        Input,
        Form: {
            variants: {
              floating: {
                container: {
                  _focusWithin: {
                    label: {
                      ...activeLabelStyles
                    }
                  },
                  "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                    ...activeLabelStyles
                  },
                  label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: "absolute",
                    backgroundColor: "white",
                    pointerEvents: "none",
                    mx: 3,
                    px: 1,
                    my: 2,
                    transformOrigin: "left top"
                  }
                }
              }
            }
          }
    }
})