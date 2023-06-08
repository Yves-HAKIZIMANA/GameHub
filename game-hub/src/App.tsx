import { Button, ButtonGroup, GridItem, Show} from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import GameGrid from './Components/GameGrid';

function App() {
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App
