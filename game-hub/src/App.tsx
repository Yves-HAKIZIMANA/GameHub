import { Button, ButtonGroup, GridItem, HStack, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreLists from "./Components/GenreLists";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconsList from "./Components/PlatformIconsList";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import DynamicHeader from "./Components/DynamicHeader";

export interface GameQuery{
  genre : Genre | null;
  platform: Platform | null;
  sortOrder : string;
  searchText: string

}

function App() {
  const [gameQuery, setGameQuery] =useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (genre: Genre) => {
    setGameQuery({...gameQuery, genre});
  };

  const handlePlatformSelection = (platform: Platform) => {
    setGameQuery({...gameQuery, platform});
  };

  const handleSortOrderSelection = (sortOrder : string) => {
    setGameQuery({...gameQuery, sortOrder})
  }

  const handleSearchFilling = (searchText: string) => {
    setGameQuery({...gameQuery, searchText})
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area="nav">
        <Navbar onSearch={handleSearchFilling}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreLists
            onSelectGenre={handleGenreSelection}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <DynamicHeader gameQuery={gameQuery} />
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handlePlatformSelection}
          />
          <SortSelector sortOrder = {gameQuery.sortOrder}onSelectSortOrder={handleSortOrderSelection} />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
