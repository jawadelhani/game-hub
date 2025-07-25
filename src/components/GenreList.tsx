import { HStack, List, ListItem ,Image, Spinner, Button, Heading} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getComputedStyle from "../services/image-url";
import useGameQueryStore from "../store";



const GenreList = () => {
    const setGenreID= useGameQueryStore(s=>s.setGenreID)
    const selectedGenreID= useGameQueryStore(s=>s.gameQuery.genreID)
    const {data,error,isLoading}= useGenres();

    if(error) return null
    if(isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre=>{
                    return (
                        <ListItem key={genre.id} paddingY='5px'>
                            <HStack>
                                <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getComputedStyle(genre.image_background)}/>
                                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id===selectedGenreID ? 'bold' :'normal' } onClick={()=>setGenreID(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    )
                })}
            </List>
        
        </>
       
    )
}

export default GenreList
