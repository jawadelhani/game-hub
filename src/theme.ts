import { extendTheme,ThemeConfig } from "@chakra-ui/react";


//themeconfig is an interface that defines the initial color mode of the app
const config: ThemeConfig ={
    initialColorMode: "dark",  //initial colorof app 
}

const theme = extendTheme({config,colors:{
    gray:{
        50:'#f9f9f9',
        100:'#ededed',
        200:'#d3d3d3',
        300:'#b3b3b3',
        400:'#a0a0a0',
        500:'#898989',
        600:'#6c6c6C',
        700:'#202020',
        800:'#121212',
        900:'#111'

    }
}})  //create a theme based on the config

export default theme;