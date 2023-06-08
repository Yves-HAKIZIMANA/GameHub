import { Image, Text } from "@chakra-ui/react";
import { HStack} from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar