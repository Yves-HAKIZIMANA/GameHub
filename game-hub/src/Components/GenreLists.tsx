import useGenres from '../hooks/useGenres'
import { HStack, List, ListItem ,Image, Text, Spinner } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'


const GenreLists = () => {
    const { data, isLoading, errors } = useGenres()

    if(errors ) return null
    if (isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreLists