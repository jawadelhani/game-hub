import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props{
    gameID:number
}


const GameScreenshots = ({gameID}:Props) => {

    const {data, error, isLoading} = useScreenshots(gameID);

    if (isLoading) return <></>;

    if (error) throw error;

    const images = data?.results;
    return images ? (
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
        {images.map((img) => (
            <Box key={img.id}>
            <Image src={img.image} alt="" />
            </Box>
        ))}
        </SimpleGrid>
    ) : (
        <></>
    );
};

export default GameScreenshots;
