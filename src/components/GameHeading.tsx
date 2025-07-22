import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gamequery: GameQuery;
}

const GameHeading = ({ gamequery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gamequery.genreID);

  const {data:platforms}= usePlatforms()
  const platform = platforms?.results.find((p) => p.id === gamequery.platformID);
  
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games `;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
export default GameHeading;
