import { Grid, grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    //custome names for your area ,architecture of website
    <Grid templateAreas={{
      base: ` "nav" "main" `,  //base for mobile screens
      lg: ` "nav nav" 
            "aside main" `   //lg for large screens 1024px
    }}>  

      <GridItem area='nav' bg='blue'>Nav</GridItem>
      <Show above="lg"> {/* show component aside only on large screens */}
        <GridItem area='aside' bg='gold'>aside</GridItem>
      </Show>      
      <GridItem area='main' bg='red'>main</GridItem>
      

    </Grid>
  )
  
}

export default App
