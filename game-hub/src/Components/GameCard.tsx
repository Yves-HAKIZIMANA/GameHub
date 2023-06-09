
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticStore from "./CriticStore";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
    const croppedUrl = getCroppedImageUrl(game.background_image)
  
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody height="200">
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
