import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        //setting device layouts
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024 px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* make sure only renders on large */}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
