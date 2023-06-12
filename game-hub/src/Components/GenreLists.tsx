import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre : (genre : Genre) => void;
    selectedGenre: Genre | null;
}

const GenreLists = ({ onSelectGenre, selectedGenre} : Props) => {
  const { data, isLoading, errors } = useGenres();

  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontWeight='2xl' marginBottom={5}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreLists;
