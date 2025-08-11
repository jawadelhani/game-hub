import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!); //slug! means slug can not be null or undefined

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading as="h2" size="xl">
            {game.name}
          </Heading>
          <ExpandableText children={game.description_raw} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameID={game.id} />
          <GameScreenshots gameID={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
