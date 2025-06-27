import { extendTheme,ThemeConfig } from "@chakra-ui/react";


//themeconfig is an interface that defines the initial color mode of the app
const config: ThemeConfig ={
    initialColorMode: "dark",  //initial colorof app 
}

const theme = extendTheme({config})  //create a theme based on the config

export default theme;