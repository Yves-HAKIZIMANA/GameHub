
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticStore from "./CriticStore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
    const croppedUrl = getCroppedImageUrl(game.background_image)
  
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody height="200">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emojis rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
