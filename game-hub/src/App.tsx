import { Button, ButtonGroup, GridItem, Show} from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import GameGrid from './Components/GameGrid';
import GenreLists from './Components/GenreLists';
import { useState } from 'react';
import {Genre} from './hooks/useGenres';
import PlatformIconsList from './Components/PlatformIconsList';
import PlatformSelector from './Components/PlatformSelector';


function App() {
  const [selectedGenre, setSelectedGenre] =useState<Genre| null>(null)

  const handleGenreSelection = (genre : Genre) => {
    setSelectedGenre(genre)
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5}>
          <GenreLists onSelectGenre={handleGenreSelection} selectedGenre={selectedGenre}  />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App
