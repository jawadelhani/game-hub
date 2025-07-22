import { HStack, List, ListItem ,Image, Spinner, Button, Heading} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getComputedStyle from "../services/image-url";

interface Props{
    onSelectGenre: (genre:Genre)=> void
    selectedGenreID?: number;
}

const GenreList = ( {onSelectGenre,selectedGenreID}:Props) => {
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
                                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id===selectedGenreID ? 'bold' :'normal' } onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    )
                })}
            </List>
        
        </>
       
    )
}

export default GenreList
