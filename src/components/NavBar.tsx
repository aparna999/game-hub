import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
