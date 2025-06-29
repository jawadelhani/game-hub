import { HStack, List, ListItem ,Image,Text, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getComputedStyle from "../services/image-url";

const GenreList = () => {
    const {data,error,isLoading}= useGenres();


    if(error) return null
    if(isLoading) return <Spinner />

    return (
        <List>
            {data.map(genre=>{
                return (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={getComputedStyle(genre.image_background)}/>
                            <Text fontSize='lg'>{genre.name}</Text>

                        </HStack>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default GenreList
