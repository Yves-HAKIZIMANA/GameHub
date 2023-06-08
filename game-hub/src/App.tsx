import { Button, ButtonGroup, GridItem, Show} from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import Navbar from './Components/Navbar';

function App() {
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area="nav" bg="coral">
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App
